"use client"

import Footer from "@/components/footer"
import Header from "@/components/header"
import Lanyard from "@/components/lanyard"
import Terminal from "@/components/terminal"
import { Separator } from "@/components/ui/separator"
import { useChat } from "@ai-sdk/react"
import { useState, useEffect, useRef, Suspense } from "react"

export default function TerminalPortfolio() {
  const [currentCommand, setCurrentCommand] = useState("")
  const [terminalHistory, setTerminalHistory] = useState([
    { type: "command", prompt: "rofi@portfolio:~$", command: "welcome" },
    { type: "output", content: "Hi, I'm Rofi, a Software & AI Engineer." },
    { type: "output", content: "\n" },
    { type: "output", content: "Welcome to my interactive 'AI powered' portfolio terminal!" },
    { type: "output", content: "Type 'help' to see available commands." },
  ])
  const [activeSection, setActiveSection] = useState("help")
  const [commandHistory, setCommandHistory] = useState(["welcome"])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef(null)
  const terminalRef = useRef(null)
  const { messages, input, handleInputChange, handleSubmit, setMessages, setInput } = useChat({
    api: '/api/chat',
    initialMessages: [
      { id: '0', role: 'assistant', content: "Hi, I'm Rofi-AI. Welcome to Rofi's portfolio." },
      { id: '1', role: 'assistant', content: "Type 'help' for a list of commands, or ask me anything!" },
    ],
    onFinish: () => {
      setHistoryIndex(-1)
    }
  })

  const handleTerminalSubmit = (e) => {
    e.preventDefault()
    const command = input.toLowerCase().trim()
    if (!command) return

    setCommandHistory(prev => [...prev.filter(c => c !== command), command])
    setHistoryIndex(-1)

    if (command === 'clear' || command === 'cls') {
      setMessages([
        { id: 0, role: 'assistant', content: 'Terminal Cleared. How can I assist you?' }
      ])
      setInput('')
      return
    }

    if (command === 'help') {
      const helpOutput = [
        "Available commands:",
        "  clear         - Clear the terminal.",
        "",
        "You can also ask me anything about Rofi's portfolio!",
        "e.g., 'what projects has rofi worked on?' or 'tell me about his skills'",
      ].map(line => ({
          id: crypto.randomUUID(),
          role: 'assistant',
          content: line
      }));
        
      setMessages([
          ...messages,
          { id: crypto.randomUUID(), role: 'user', content: input },
          ...helpOutput
      ]);
      setInput('')
      return;
    }

    handleSubmit(e)
  }

  // const handleCommand = (cmd) => {
  //   const command = cmd.toLowerCase().trim()
  //   let newHistory = [...terminalHistory]

  //   // Add the command to history
  //   newHistory.push({ type: "command", prompt: `rofi@portfolio:~$`, command: cmd  })

    // if (command && command !== "clear" ) {
    //   setCommandHistory(prev => [...prev.filter(c => c !== command), command])
    // }
    // setHistoryIndex(-1)

  //   if (command === "clear" || command === "cls") {
  //     setTerminalHistory([])
  //     setCurrentCommand("")
  //     return
  //   }

  //   if (commands[command]) {
  //     const output = commands[command].output
  //     const outputLines = output.map((line => ({ type: 'output', content: line })))
  //     newHistory = [...newHistory, ...outputLines]
  //     setActiveSection(command)
  //   } else if (command) {
  //     newHistory.push({ type: "output", content: `Command not found: ${command}` });
  //     newHistory.push({ type: "output", content: "Type 'help' to see available commands." });
  //   }
  //   setTerminalHistory(newHistory);
  //   setCurrentCommand("");

  //   // newHistory.push({ type: "output", content: "" })
  //   setTerminalHistory(newHistory)
  //   setCurrentCommand("")
  // }

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

  const handleNavClick = (section) => {
    const command = section.replace(" |", "").trim()
    handleCommand(section)
  }

  // useEffect(() => {
  //   terminalRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [terminalHistory])

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
        <div className="bg-gradient-to-tl from-black to-gray-800 w-2/3 hidden lg:flex items-center justify-center p-4">
          <Lanyard />
        </div>
        <Separator orientation="vertical" className="bg-green-800" />

        {/* Right Column - Terminal */}
        <Terminal
          activeSection={activeSection}
          handleNavClick={handleNavClick}
          handleKeyDown={handleKeyDown}
          terminalRef={terminalRef}
          focusInput={focusInput}
          terminalHistory={terminalHistory}
          inputRef={inputRef}
          currentCommand={currentCommand}
          setCurrentCommand={setCurrentCommand}
          messages={messages}
          handleTerminalSubmit={handleTerminalSubmit}
          input={input}
          handleInputChange={handleInputChange}
        />
      </div>
      <Footer />
    </div>
  )
}