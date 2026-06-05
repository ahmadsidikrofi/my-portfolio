import CustomTypingText from "./CustomTypingText";
import { ScrollArea } from "./ui/scroll-area";
import { parseLinks } from "@/lib/utils";

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
  setIsFetching,
  errorCommands,
  delayingIds,
  finishedAnimationIds,
  completedMessages,
  setInput
}) => {
  return (
    <div className="w-full lg:w-full flex flex-col p-4">
      {/* Navigation */}
      <nav className="shrink-0">
        <div className="hidden lg:flex flex-wrap text-sm">
          {localCommands.map((item) => (
            <div
              key={item}
              className="border-b border-green-500 pb-2 cursor-pointer hover:bg-green-900/30 hover:text-white transition-colors"
              onClick={() => {
                if (setInput) setInput(item);
                if (focusInput) focusInput();
              }}
            >
              <span className="px-1">{item}</span>|
            </div>
          ))}
        </div>
      </nav>

      {/* Terminal Content */}
      <ScrollArea className="flex-1 overflow-y-auto pr-2" onClick={focusInput}>
        {messages.map((m, index) => {
          const isUserMessagePending = errorCommands[m.id] && delayingIds.has(m.id)
          const isInitialMessage = m.role === 'assistant' && !finishedAnimationIds.has(m.id) && ['0', '1', '2', '3', '4'].includes(m.id)
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
                    <p className="text-white text-sm">{parseLinks(m.content)}</p>
                  )}
                  {isAnimationReady && (
                    <p className="text-white text-sm">
                      {completedMessages[m.id] ? (
                        <CustomTypingText
                          text={completedMessages[m.id]}
                          messageId={m.id}
                          typingSpeed={15}
                          cursorCharacter="█"
                          cursorClassName="text-[#39FF14] animate-pulse"
                          showCursor={true}
                          setIsFetching={setIsFetching}
                        />
                      ) : (
                        parseLinks(m.content)
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