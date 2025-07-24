import CustomTypingText from "./CustomTypingText";
import { ScrollArea } from "./ui/scroll-area";

const Terminal = ({
  localCommands,
  handleKeyDown,
  focusInput,
  inputRef,
  messages,
  handleTerminalSubmit,
  input,
  handleInputChange,
  isFetching,
  errorCommands,
  isDelaying,
  delayingIds,
  finishedAnimationIds,
  completedMessages
}) => {
  return (
    <div className="w-full lg:w-full flex flex-col p-4">
      {/* Navigation */}
      <nav className="mb-4 shrink-0">
        <div className="flex flex-wrap gap-x-4 text-sm">
          {localCommands.map((item) => (
            <div key={item}>
              {item} |
            </div>
          ))}
        </div>
      </nav>

      {/* Terminal Content */}
      <ScrollArea className="flex-1 overflow-y-auto pr-2" onClick={focusInput}>
        {messages.map((m, index) => {
          const isUserMessagePending = errorCommands[m.id] && delayingIds.has(m.id)
          const isInitialMessage = m.role === 'assistant' && !finishedAnimationIds.has(m.id) && ['0','1','2','3','4'].includes(m.id)
          const isAnimationReady = m.role === 'assistant' && finishedAnimationIds.has(m.id)
          
          return (
            <div key={m.id || index} className="whitespace-pre-wrap break-words">
              {m.role === "user" ? (
                <>
                  <p className="mt-6 mb-2 text-sm">
                    <span className="text-[#00b7ff] mr-2">rofi@portfolio:~$</span>
                    <span className="text-[#39FF14]">{m.content}</span>
                  </p>
                  {/* Show error message jika command ini adalah error command */}
                  {errorCommands[m.id] && (
                    <div>
                      <p className="text-red-500 mb-6 text-sm">
                        bash: {errorCommands[m.id]}: command not found
                      </p>
                      {isUserMessagePending && (
                        <p className="text-white mb-6 text-sm">AI is thinking. . .</p>
                      )}
                    </div>
                  )}
                </>
              ) : (
                  <>
                    {isInitialMessage && (
                      <p className="text-white text-sm">{m.content}</p>
                    )}
                    {isAnimationReady && (
                      <p className="text-white text-sm">
                        {completedMessages[m.id] ? (
                          <CustomTypingText
                            text={completedMessages[m.id]}
                            messageId={m.id}
                            typingSpeed={40}
                            cursorCharacter="█"
                            cursorClassName="text-[#39FF14] animate-pulse"
                            showCursor={true}
                          />
                        ) : (
                          m.content
                        )}
                      </p>
                    )}
                  </>
              )}
            </div>
          )
        })}

        {/* Command Input */}
        <form onSubmit={handleTerminalSubmit} className="flex items-center mt-6 relative">
          <span className="text-[#00b7ff] mr-2">rofi@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="bg-transparent border border-none outline-none custom-caret text-white font-mono w-full"
            autoFocus
            style={{ position: "relative", zIndex: 2, background: "transparent" }}
            disabled={isFetching}
          />

          <span
            className="block-caret"
            style={{
              position: "absolute",
              left: `calc(11em + ${input.length}ch)`,
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