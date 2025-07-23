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
    setCurrentCommand,
    messages,
    handleTerminalSubmit,
    input,
    handleInputChange
 }) => {
    return (
        <div className="w-full lg:w-full flex flex-col p-4">
          {/* Navigation */}
          <nav className="mb-4 shrink-0">
            <div className="flex flex-wrap gap-x-4 text-sm">
              {[
                "help | ",
                "about | ",
                "projects | ",
                "skills | ",
                "experience |",
                "contact |",
                "education |",
                "certifications |",
                "leadership |",
                "clear |",
              ].map((item) => (
                <div key={item}>
                  {item}
                </div>
              ))}
            </div>
          </nav>

          {/* Terminal Content */}
          <ScrollArea className="flex-1 overflow-y-auto pr-2" onClick={focusInput}>
            {messages.map((m) => (
              <div key={m.id} className="whitespace-pre-wrap break-words">
                {m.role === "user" ? (
                  <p className="my-6">
                    <span className="text-[#00b7ff] mr-2">rofi@portfolio:~$</span>
                    <span className="text-white">{m.content}</span>
                    {/* <span className="text-white">{line.command}</span> */}
                  </p>
                ) : (
                  <p className="text-[#39FF14]">{m.content}</p>
                  // <p className="text-[#39FF14]">{line.content}</p>
                )}
              </div>
            ))}
            {/* Command Input */}
            <form onSubmit={handleTerminalSubmit} className="flex items-center mt-6 relative">
              <span className="text-[#00b7ff] mr-2">rofi@portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={handleInputChange}
                // onKeyDown={handleKeyPress}
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
            </form>
          </ScrollArea>
        </div>
    );
}

export default Terminal;