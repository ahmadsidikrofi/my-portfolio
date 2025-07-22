import { ScrollArea } from "./ui/scroll-area";

const Terminal = ({ 
    activeSection, 
    handleKeyPress, 
    handleNavClick, 
    terminalRef, 
    focusInput, 
    terminalHistory, 
    inputRef, 
    currentCommand,
    setCurrentCommand
 }) => {
    return (
        <div className="w-full lg:w-full flex flex-col p-4 sm:p-8">
          {/* Navigation */}
          <nav className="mb-4 shrink-0">
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
          <ScrollArea className="flex-1 overflow-y-auto pr-2" onClick={focusInput}>
            {terminalHistory.map((line, index) => (
              <div key={index} className="whitespace-pre-wrap break-words">
                {line.type === "command" ? (
                  <p className="my-2">
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
          </ScrollArea>
        </div>
    );
}

export default Terminal;