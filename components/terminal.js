"use client";

import { useEffect, useRef } from "react";
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
  const viewportRef = useRef(null);
  const bottomRef = useRef(null);
  const isUserScrolledUp = useRef(false);

  // Focus input automatically on mount and keep checking briefly
  useEffect(() => {
    const focus = () => {
      if (inputRef?.current && document.activeElement !== inputRef.current) {
        inputRef.current.focus();
      }
    };

    focus();
    const t1 = setTimeout(focus, 50);
    const t2 = setTimeout(focus, 200);
    const t3 = setTimeout(focus, 500);
    const t4 = setTimeout(focus, 1000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [inputRef]);

  // Refocus input whenever isFetching transitions to false (after command or AI response finishes)
  useEffect(() => {
    if (!isFetching && inputRef?.current) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isFetching, inputRef]);

  // Refocus input when user returns to window/tab
  useEffect(() => {
    const handleWindowFocus = () => {
      if (inputRef?.current) {
        inputRef.current.focus();
      }
    };
    window.addEventListener("focus", handleWindowFocus);
    return () => window.removeEventListener("focus", handleWindowFocus);
  }, [inputRef]);

  // Global keydown: user can immediately start typing without clicking input first
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if (e.ctrlKey || e.altKey || e.metaKey) return;

      const activeTag = document.activeElement?.tagName;
      if (
        activeTag === "INPUT" ||
        activeTag === "TEXTAREA" ||
        document.activeElement?.isContentEditable
      ) {
        return;
      }

      if (e.key && (e.key.length === 1 || e.key === "Backspace" || e.key === "Enter")) {
        if (inputRef?.current && !isFetching) {
          inputRef.current.focus();
        }
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => {
      window.removeEventListener("keydown", handleGlobalKeyDown);
    };
  }, [inputRef, isFetching]);

  // Focus input when clicking anywhere on terminal (unless clicking a link or selecting text)
  const handleContainerClick = (e) => {
    if (e.target.closest("a") || e.target.closest("button")) {
      return;
    }
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) {
      return;
    }
    if (focusInput) {
      focusInput();
    }
  };

  // Scroll detection to avoid interrupting user when they intentionally scroll up
  const handleScroll = (e) => {
    const el = e.currentTarget;
    if (!el) return;
    const distanceFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
    // If user is more than 60px from the bottom, consider them scrolled up
    isUserScrolledUp.current = distanceFromBottom > 60;
  };

  const scrollToBottom = (smooth = false) => {
    if (viewportRef.current) {
      if (smooth) {
        viewportRef.current.scrollTo({
          top: viewportRef.current.scrollHeight,
          behavior: "smooth"
        });
      } else {
        viewportRef.current.scrollTop = viewportRef.current.scrollHeight;
      }
    } else {
      bottomRef.current?.scrollIntoView({ behavior: smooth ? "smooth" : "auto" });
    }
  };

  // Auto-scroll when messages update or animations trigger
  useEffect(() => {
    if (!isUserScrolledUp.current) {
      scrollToBottom(false);
    }
  }, [messages, delayingIds, finishedAnimationIds, completedMessages]);

  // MutationObserver on viewport: follow live text typing as long as user is near bottom
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const observer = new MutationObserver(() => {
      if (!isUserScrolledUp.current) {
        viewport.scrollTop = viewport.scrollHeight;
      }
    });

    observer.observe(viewport, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => observer.disconnect();
  }, []);

  const onSubmitWrapper = (e) => {
    isUserScrolledUp.current = false;
    handleTerminalSubmit(e);
    setTimeout(() => {
      scrollToBottom(true);
    }, 50);
  };

  const handleCommandClick = (item) => {
    if (setInput) setInput(item);
    if (focusInput) focusInput();
    isUserScrolledUp.current = false;
    setTimeout(() => {
      scrollToBottom(true);
    }, 50);
  };

  return (
    <div
      className="w-full h-full flex flex-col p-4 overflow-hidden select-text"
      onClick={handleContainerClick}
    >
      {/* Navigation */}
      <nav className="shrink-0 mb-2">
        <div className="hidden lg:flex flex-wrap text-sm">
          {localCommands.map((item) => (
            <div
              key={item}
              className="border-b border-green-500 pb-2 cursor-pointer hover:bg-green-900/30 hover:text-white transition-colors"
              onClick={() => handleCommandClick(item)}
            >
              <span className="px-1">{item}</span>|
            </div>
          ))}
        </div>
      </nav>

      {/* Terminal Content */}
      <ScrollArea
        className="flex-1 min-h-0 h-full pr-2"
        viewportRef={viewportRef}
        onScroll={handleScroll}
        type="auto"
      >
        <div className="flex flex-col min-h-full pb-2">
          {messages.map((m, index) => {
            const isUserMessagePending = errorCommands[m.id] && delayingIds.has(m.id);
            const isInitialMessage =
              m.role === "assistant" &&
              !finishedAnimationIds.has(m.id) &&
              ["0", "1", "2", "3", "4"].includes(m.id);
            const isAnimationReady =
              m.role === "assistant" && finishedAnimationIds.has(m.id);

            return (
              <div key={m.id || index} className="whitespace-pre-wrap break-words">
                {m.role === "user" ? (
                  <>
                    <p className="mt-6 mb-2 text-sm">
                      <span className="text-[#00b7ff] mr-2">rofi@portfolio:~$</span>
                      <span className="text-[#39FF14]">{m.content}</span>
                    </p>
                    {/* Show error message if this command is not found */}
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
            );
          })}

          {/* Command Input */}
          <form onSubmit={onSubmitWrapper} className="flex items-center mt-6 relative">
            <span className="text-[#00b7ff] mr-2 shrink-0">rofi@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => {
                isUserScrolledUp.current = false;
                handleInputChange(e);
              }}
              onFocus={() => {
                scrollToBottom(false);
              }}
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

          {/* Bottom spacer / anchor for auto-scroll */}
          <div ref={bottomRef} className="h-4 shrink-0" />
        </div>
      </ScrollArea>
    </div>
  );
};

export default Terminal;