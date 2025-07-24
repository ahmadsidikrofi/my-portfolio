import { useState, useEffect, useRef } from 'react';

const CustomTypingText = ({ 
  text, 
  className = '', 
  typingSpeed = 30, 
  onComplete = null,
  showCursor = false,
  cursorCharacter = '█',
  cursorClassName = ''
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const intervalRef = useRef(null);
  const hasStartedRef = useRef(false);
  
  // Gabungkan array text jadi string jika perlu
  const fullText = Array.isArray(text) ? text.join('\n') : text;
  
  // Debug log
  console.log('CustomTypingText rendered with text:', fullText);
  
  useEffect(() => {
    // Reset jika text berubah
    if (hasStartedRef.current) {
      hasStartedRef.current = false;
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
    
    // Prevent restart jika sudah mulai untuk text yang sama
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;
    
    console.log('Starting animation for:', fullText);
    
    setDisplayedText('');
    setIsComplete(false);
    
    let currentIndex = 0;
    
    intervalRef.current = setInterval(() => {
      if (currentIndex >= fullText.length) {
        setIsComplete(true);
        if (onComplete) onComplete();
        clearInterval(intervalRef.current);
        return;
      }
      
      setDisplayedText(fullText.slice(0, currentIndex + 1));
      currentIndex++;
    }, typingSpeed);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [fullText, typingSpeed]); // Tambahkan dependencies
  
  if (!fullText) {
    console.log('No text provided to CustomTypingText');
    return null;
  }
  
  return (
    <span className={className}>
      {displayedText.split('\n').map((line, index) => (
        <span key={index}>
          {line}
          {index < displayedText.split('\n').length - 1 && <br />}
        </span>
      ))}
      {showCursor && !isComplete && (
        <span className={cursorClassName}>{cursorCharacter}</span>
      )}
    </span>
  );
};

export default CustomTypingText;