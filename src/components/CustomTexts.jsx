import { textContainer, textVariant2 } from "../utils/motion";
import { MotionH2, MotionP, MotionSpan } from "./MotionComponents";

export const TypingText = ({ title, className }) => (
  <MotionP
    variants={textContainer}
    className={`${className}`}
  >
    {
      Array.from(title).map((letter, index) => (
        <MotionSpan
          variants={textVariant2}
          key={index}

        >
          {letter === ' ' ? '\u00A0' : letter}
        </MotionSpan>
      ))
    }
  </MotionP>
);

export const TypingTitle = ({ title, className }) => (
  <MotionH2
    variants={textContainer}
    className={`${className}`}
  >
    {
      title.split(' ').map((word, wordCount) => {
        return (
          <span key={wordCount} className="flex">
            {
              Array.from(word).map((letter, index) => (
                <MotionSpan
                  variants={textVariant2}
                  key={index}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </MotionSpan>
              ))
            }
            <span>{'\u00A0'}</span>
          </span>
        )
      })
    }
  </MotionH2>
);

export const TitleText = ({ title, className }) => (
  <MotionH2
    variants={textVariant2}
    initial='hidden'
    whileInView='show'
    className={`mt-[8px] font-bold md:text-[45px] text-[35px] text-white ${className}`}
  >
    {title}
  </MotionH2>
);
