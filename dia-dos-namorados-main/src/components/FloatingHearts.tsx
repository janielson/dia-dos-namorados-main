
import { useEffect, useState } from "react";

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; delay: number; size: number; emoji: string }>>([]);

  useEffect(() => {
    const heartEmojis = ['❤️', '💕', '💖', '💝', '💗', '💓', '💘', '💞', '💟', '✨'];
    const heartElements = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      size: 15 + Math.random() * 10,
      emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
    }));
    setHearts(heartElements);
  }, []);

  return (
    <div className="floating-hearts">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${8 + Math.random() * 6}s`,
            fontSize: `${heart.size}px`,
          }}
        >
          {heart.emoji}
        </div>
      ))}
      
      {/* Enhanced sparkle effects */}
      {Array.from({ length: 30 }, (_, i) => (
        <div
          key={`sparkle-${i}`}
          className="sparkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}
      
      {/* Floating particles */}
      {Array.from({ length: 15 }, (_, i) => (
        <div
          key={`particle-${i}`}
          className="floating-particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingHearts;
