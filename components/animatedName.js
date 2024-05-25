import { useState } from "react";

const AnimatedName = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = () => {
    setHovered(true);
  };

  const letters = ["S", "h", "i", "v", "a"];

  return (
    <div
      className="text-5xl font-bold"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHovered(false)}
    >
      {letters.map((letter, index) => (
        <span
          key={index}
          className={`${hovered ? "fade-in" : ""} delay-${index}`}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default AnimatedName;
