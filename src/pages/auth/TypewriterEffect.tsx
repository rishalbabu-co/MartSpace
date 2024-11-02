import { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  messages: string[];
}

export default function TypewriterEffect({ messages }: TypewriterEffectProps) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const message = messages[currentMessageIndex];
    const timeoutDelay = isDeleting ? 50 : 100;

    if (!isDeleting && currentText === message) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentMessageIndex((currentMessageIndex + 1) % messages.length);
      return;
    }

    const timeout = setTimeout(() => {
      setCurrentText(prevText => {
        if (!isDeleting) {
          return message.slice(0, prevText.length + 1);
        }
        return message.slice(0, prevText.length - 1);
      });
    }, timeoutDelay);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentMessageIndex, messages]);

  return (
    <div className="h-full flex items-center">
      <h2 className="text-3xl font-bold text-white min-h-[4rem]">
        {currentText}
        <span className="animate-pulse text-white">|</span>
      </h2>
    </div>
  );
}