"use client"

import Footer from "@/components/footer"
import Header from "@/components/header"
import Lanyard from "@/components/lanyard"
import Terminal from "@/components/terminal"
import { Separator } from "@/components/ui/separator"
import { useChat } from "@ai-sdk/react"
import { useState, useEffect, useRef, Suspense } from "react"

export default function TerminalPortfolio() {
  const localCommands = [
    "help",
    "about",
    "projects",
    "skills",
    "experience",
    "contact",
    "education",
    "certifications",
    "leadership",
    "clear",
  ]
  const [commandHistory, setCommandHistory] = useState(["welcome"])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef(null)
  const [isFetching, setIsFetching] = useState(false)
  const [errorCommands, setErrorCommands] = useState({})
  const [delayingIds, setDelayingIds] = useState(new Set())
  const [finishedAnimationIds, setFinishedAnimationIds] = useState(new Set())
  const [animationCompletedIds, setAnimationCompletedIds] = useState(new Set())
  const [completedMessages, setCompletedMessages] = useState({})

  const { messages, input, handleInputChange, setMessages, setInput, append } = useChat({
    api: '/api/chat',
    initialMessages: [
      { id: '0', role: 'assistant', content: "Assalamualaikum!" },
      { id: '1', role: 'assistant', content: "Hi, I'm Rofi-AI. Welcome to Rofi's portfolio." },
      { id: '2', role: 'assistant', content: "\n" },
      { id: '3', role: 'assistant', content: "Welcome to my interactive 'AI powered' portfolio terminal!" },
      { id: '4', role: 'assistant', content: "Type 'help' for a list of commands, or ask me anything!" },
    ],
    onFinish: (message) => {
      console.log('onFinish called for:', message.id)
      setCompletedMessages(prev => ({ ...prev, [message.id]: message.content }))
      setFinishedAnimationIds(prev => new Set(prev).add(message.id))
      setHistoryIndex(-1)
      setIsFetching(false)
      setDelayingIds(prev => {
        const newSet = new Set(prev);
        newSet.delete(message.id);
        return newSet;
      })
    }
  })

  const handleTerminalSubmit = (e) => {
    e.preventDefault()
    const command = input.toLowerCase().trim()
    if (!command) return

    setCommandHistory(prev => [...prev.filter(c => c !== command), command])
    setHistoryIndex(-1)

    if (command === 'clear' || command === 'cls') {
      setMessages([])
      setInput('')
      // Clear semua state
      setErrorCommands({})
      setDelayingIds(new Set())
      setFinishedAnimationIds(new Set())
      return
    }

    const isLocalCommands = localCommands.includes(command)

    if (isLocalCommands) {
      setIsFetching(prev => true)
      append({ role: 'user', content: input })
    } else {
      setIsFetching(prev => true)
      const messageId = Date.now().toString()
      
      setErrorCommands(prev => ({
        ...prev,
        [messageId]: command
      }))
      
      setDelayingIds(prev => new Set(prev).add(messageId))
      
      setTimeout(() => {
        setDelayingIds(prev => {
          const newSet = new Set(prev);
          newSet.delete(messageId)
          return newSet
        });
      }, 3000)
      
      append({ 
        role: 'user', 
        content: input,
        id: messageId
      })
    }

    setInput('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (commandHistory.length === 0) return;
      const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1)
      setHistoryIndex(newIndex)
      setInput(commandHistory[newIndex] || '')
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex === -1) return
      const newIndex = historyIndex + 1
      if (newIndex >= commandHistory.length) {
        setHistoryIndex(-1)
        setInput('')
      } else {
        setHistoryIndex(newIndex)
        setInput(commandHistory[newIndex] || '')
      }
    } else if (e.ctrlKey && e.key === 'a') {
      e.preventDefault();
      const selectionStart = inputRef.current.selectionStart;
      const selectionEnd = inputRef.current.selectionEnd;
      const value = inputRef.current.value;
      const newValue = value.substring(0, selectionStart) + value.substring(selectionEnd);
      setInput(newValue);
      inputRef.current.setSelectionRange(selectionStart, selectionStart);
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <div className="min-h-screen overflow-hidden bg-black font-mono">
      <Header />
      <div className=" text-[#39FF14] font-mono flex h-[84vh]">
        {/* Left Column - Lanyard */}
        <div className="bg-gradient-to-tl from-black to-gray-800 w-2/3 hidden lg:flex items-center justify-center">
          <Lanyard />
        </div>
        <Separator orientation="vertical" className="bg-green-800" />

        {/* Right Column - Terminal */}
        <Terminal
          localCommands={localCommands}
          handleKeyDown={handleKeyDown}
          focusInput={focusInput}
          inputRef={inputRef}
          messages={messages}
          handleTerminalSubmit={handleTerminalSubmit}
          input={input}
          handleInputChange={handleInputChange}
          isFetching={isFetching}
          setIsFetching={setIsFetching}
          errorCommands={errorCommands}
          delayingIds={delayingIds}
          finishedAnimationIds={finishedAnimationIds}
          animationCompletedIds={animationCompletedIds}
          setAnimationCompletedIds={setAnimationCompletedIds}
          completedMessages={completedMessages}
        />
      </div>
      <Footer />
    </div>
  )
}