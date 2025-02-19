import React, { useState, useEffect } from "react";

const TEXTS = ["Full Stack Web Developer", "2+ years of work experience"];
const TYPING_SPEED = 100; // Speed of typing
const BACKSPACE_SPEED = 50; // Speed of backspacing
const DELAY_BEFORE_BACKSPACE = 1000; // Delay before deleting
const DELAY_BEFORE_NEXT_TEXT = 500; // Delay before switching to the next text

const TypingEffect: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [textIndex, setTextIndex] = useState<number>(0); // Track which text to display

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && index < TEXTS[textIndex].length) {
      // Typing effect
      timer = setTimeout(() => {
        setText((prev) => prev + TEXTS[textIndex][index]);
        setIndex((prev) => prev + 1);
      }, TYPING_SPEED);
    } else if (isDeleting && index > 0) {
      // Backspace effect
      timer = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      }, BACKSPACE_SPEED);
    } else if (index === TEXTS[textIndex].length) {
      // Wait before deleting
      timer = setTimeout(() => setIsDeleting(true), DELAY_BEFORE_BACKSPACE);
    } else if (index === 0 && isDeleting) {
      // Switch to the next text after deleting
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % TEXTS.length);
      timer = setTimeout(() => {}, DELAY_BEFORE_NEXT_TEXT);
    }

    return () => clearTimeout(timer);
  }, [index, isDeleting, textIndex]);

  return <span className="text-[#915eff]">{text}|</span>;
};

export default TypingEffect;

