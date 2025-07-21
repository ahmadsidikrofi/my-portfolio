"use client"

import Lanyard from "@/components/lanyard"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

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

  const commands = {
    welcome: {
      output: [
        "Hi, I'm Rofi, a Software & AI Engineer.",
        "Welcome to my interactive 'AI powered' portfolio terminal!",
        "Type 'help' to see available commands."
      ]
    },
    help: {
      output: [
        "Available commands:",
        "  about          - Learn about me",
        "  projects       - View my projects",
        "  skills         - See my technical skills",
        "  experience     - My work experience",
        "  contact        - How to reach me",
        "  education      - My educational background",
        "  certifications - View my certifications",
        "  leadership     - Leadership and community involvement",
        "  clear          - Clear the terminal",
      ],
    },
    about: {
      output: [
        "About Rofi:",
        "",
        "I am a passionate Software & AI Engineer with expertise in building",
        "scalable applications and intelligent systems. I love solving complex",
        "problems and creating innovative solutions that make a difference.",
        "",
        "When I'm not coding, you can find me exploring new technologies,",
        "contributing to open source projects, or mentoring fellow developers.",
      ],
    },
    projects: {
      output: [
        "Recent Projects:",
        "",
        "1. AI-Powered Analytics Dashboard",
        "   - Built with React, Python, and TensorFlow",
        "   - Real-time data processing and visualization",
        "",
        "2. Distributed Microservices Platform",
        "   - Node.js, Docker, Kubernetes",
        "   - Handles 10M+ requests per day",
        "",
        "3. Machine Learning Pipeline",
        "   - Python, Apache Airflow, AWS",
        "   - Automated model training and deployment",
      ],
    },
    skills: {
      output: [
        "Technical Skills:",
        "",
        "Languages:     JavaScript, TypeScript, Python, Java, Go",
        "Frontend:      React, Next.js, Vue.js, HTML5, CSS3",
        "Backend:       Node.js, Express, Django, FastAPI",
        "Databases:     PostgreSQL, MongoDB, Redis, Elasticsearch",
        "Cloud:         AWS, Google Cloud, Azure, Docker, Kubernetes",
        "AI/ML:         TensorFlow, PyTorch, Scikit-learn, OpenAI API",
        "Tools:         Git, Jenkins, Terraform, Grafana, Prometheus",
      ],
    },
    experience: {
      output: [
        "Work Experience:",
        "",
        "Senior Software Engineer | TechCorp (2022 - Present)",
        "• Lead development of AI-powered features",
        "• Mentor junior developers and conduct code reviews",
        "• Architected scalable microservices infrastructure",
        "",
        "Software Engineer | StartupXYZ (2020 - 2022)",
        "• Built full-stack web applications using React and Node.js",
        "• Implemented CI/CD pipelines and automated testing",
        "• Collaborated with cross-functional teams on product development",
      ],
    },
    contact: {
      output: [
        "Contact Information:",
        "",
        "Email:     ahmadsidikrofiudin@email.com",
        "LinkedIn:  linkedin.com/in/ahmad-sidik-rofiudin-6b2b58217/",
        "GitHub:    github.com/ahmadsidikrofi",
        "",
        "Feel free to reach out for collaboration opportunities!",
      ],
    },
    education: {
      output: [
        "Education:",
        "",
        "Master of Science in Computer Science",
        "Stanford University (2018 - 2020)",
        "• Specialization in Artificial Intelligence",
        "• GPA: 3.9/4.0",
        "",
        "Bachelor of Science in Software Engineering",
        "University of Technology (2014 - 2018)",
        "• Magna Cum Laude",
        "• President of Computer Science Society",
      ],
    },
    certifications: {
      output: [
        "Certifications:",
        "",
        "• AWS Certified Solutions Architect - Professional",
        "• Google Cloud Professional Machine Learning Engineer",
        "• Certified Kubernetes Administrator (CKA)",
        "• MongoDB Certified Developer",
        "• Scrum Master Certified (SMC)",
        "• TensorFlow Developer Certificate",
      ],
    },
    leadership: {
      output: [
        "Leadership & Community:",
        "",
        "• Tech Lead for 15+ person engineering team",
        "• Organizer of local JavaScript meetup (500+ members)",
        "• Mentor at Code for Good hackathons",
        "• Speaker at 10+ tech conferences",
        "• Open source contributor (50+ repositories)",
        "• Volunteer coding instructor for underserved communities",
      ],
    },
  }

  const handleCommand = (cmd) => {
    const command = cmd.toLowerCase().trim()
    let newHistory = [...terminalHistory]

    // Add the command to history
    newHistory.push({ type: "command", prompt: `rofi@portfolio:~$`, command: cmd  })

    if (command && command !== "clear" ) {
      setCommandHistory(prev => [...prev.filter(c => c !== command), command])
    }
    setHistoryIndex(-1)

    if (command === "clear" || command === "cls") {
      setTerminalHistory([])
      setCurrentCommand("")
      return
    }

    if (commands[command]) {
      const output = commands[command].output
      const outputLines = output.map((line => ({ type: 'output', content: line })))
      newHistory = [...newHistory, ...outputLines]
      setActiveSection(command)
    } else if (command) {
      newHistory.push({ type: "output", content: `Command not found: ${command}` });
      newHistory.push({ type: "output", content: "Type 'help' to see available commands." });
    }
    setTerminalHistory(newHistory);
    setCurrentCommand("");

    // newHistory.push({ type: "output", content: "" })
    setTerminalHistory(newHistory)
    setCurrentCommand("")
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleCommand(currentCommand)
    }
    else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (commandHistory.length === 0) return
      const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1)
      setHistoryIndex(newIndex)
      setCurrentCommand(commandHistory[newIndex])
    }
  }

  const handleNavClick = (section) => {
    const command = section.replace(" |", "").trim()
    handleCommand(section)
  }

  useEffect(() => {
    terminalRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [terminalHistory])

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
    <div className="min-h-screen bg-black text-[#39FF14] font-mono flex p-4 sm:p-8">
      <Lanyard />

      {/* Right Column - Terminal */}
      <div className="w-full lg:w-4/5 flex flex-col h-[calc(100vh-4rem)]">
        {/* Navigation */}
        <nav className="mb-4">
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {[
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
            ].map((item) => (
              <div key={item}>
                <button
                  onClick={() => handleNavClick(item)}
                  className={`hover:text-white transition-colors focus:outline-none ${
                    activeSection === item ? "text-white" : "text-[#39FF14]"
                  }`}
                >
                  {item}
                </button>
                <span className="text-gray-600">|</span>
              </div>
            ))}
          </div>
        </nav>

        {/* Terminal Content */}
        <div ref={terminalRef} className="flex-1 overflow-y-auto pr-2" onClick={focusInput}>
          {terminalHistory.map((line, index) => (
            <div key={index} className="whitespace-pre-wrap break-words">
              {line.type === "command" ? (
                <p className="my-6">
                  <span className="text-[#00b7ff] mr-2">{line.prompt}</span>
                  <span className="text-white">{line.command}</span>
                </p>
              ) : (
                <p className="text-[#39FF14]">{line.content}</p>
              )}
            </div>
          ))}
          {/* Command Input */}
          <div className="flex items-center mt-6 relative">
            <span className="text-[#00b7ff] mr-2">rofi@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={currentCommand}
              onChange={(e) => setCurrentCommand(e.target.value)}
              onKeyDown={handleKeyPress}
              className="bg-transparent border border-none outline-none custom-caret text-white font-mono w-full"
              autoFocus
              style={{ position: "relative", zIndex: 2, background: "transparent" }}
            />

            <span
              className="block-caret"
              style={{
                position: "absolute",
                left: `calc(11em + ${currentCommand.length}ch)`,
                zIndex: 1,
                pointerEvents: "none",
              }}
            ></span>
          </div>
        </div>

      </div>
    </div>
  )
}
