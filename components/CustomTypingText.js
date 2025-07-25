// CustomTypingText.js

import { useState, useEffect } from 'react';

const CustomTypingText = ({
  text,
  className = '',
  typingSpeed = 30,
  onComplete = null,
  showCursor = false,
  cursorCharacter = '█',
  cursorClassName = '',
  setIsFetching
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Mengubah teks array menjadi satu string jika perlu
  const fullText = Array.isArray(text) ? text.join('\n') : text;

  useEffect(() => {
    setIsFetching(true)
    // Reset state setiap kali 'fullText' yang baru masuk
    setDisplayedText('');
    setIsTypingComplete(false);

    // Jangan jalankan interval jika tidak ada teks
    if (!fullText) {
      return;
    }

    let currentIndex = 0;
    const intervalId = setInterval(() => {
      currentIndex++;
      setDisplayedText(fullText.slice(0, currentIndex));

      if (currentIndex >= fullText.length) {
        clearInterval(intervalId);
        setIsTypingComplete(true);
        if (onComplete) {
          onComplete();
        }
      }
    }, typingSpeed);

    // Fungsi cleanup untuk membersihkan interval saat komponen di-unmount
    // atau saat effect berjalan ulang
    return () => clearInterval(intervalId);

    // Tambahkan semua props yang digunakan di dalam effect ke dependency array
  }, [fullText, typingSpeed, onComplete]);

  return (
    <span className={className}>
      {/* Render teks yang sedang diketik */}
      {displayedText}
      
      {/* Tampilkan kursor jika diminta dan animasi belum selesai */}
      {showCursor && !isTypingComplete && (
        <span className={cursorClassName}>{cursorCharacter}</span>
      )}
    </span>
  );
};

export default CustomTypingText;