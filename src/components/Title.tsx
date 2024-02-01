import { useState, forwardRef, useRef, useEffect } from "react";
import "./CSS/Title.css";
import bgImage from "../assets/images/coupleHoldingHands.jpeg";

interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  const inputRef = useRef<HTMLDivElement>(null);
  const inputRef2 = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!inputRef.current) {
        throw Error("Ref not assigned (Title.tsx)");
      }
      if (!inputRef2.current) {
        throw Error("Ref2 not assigned (Title.tsx)");
      }

      const dateTextPosInfo = inputRef.current.getBoundingClientRect();
      // const imgPosInfo = inputRef2.current.getBoundingClientRect();

      if (window.innerHeight < window.innerWidth && dateTextPosInfo.y < -10) {
        inputRef2.current.style.position = "absolute";
        inputRef2.current.style.top = `92vh`;
        inputRef2.current.style.left = "0";
      } else if (window.innerHeight < window.innerWidth) {
        inputRef2.current.style.position = "fixed";
        inputRef2.current.style.top = "12vh";
        inputRef2.current.style.left = "0";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bgContainer">
      <img className="bgImage" src={bgImage} ref={inputRef2}></img>
      <div className="title" id="mainTitle">
        {title}
      </div>
      <div className="title" id="subtitle">
        are getting married
      </div>
      <div className="title" id="date" ref={inputRef}>
        Jan 1 2025 @ 10 am
      </div>
    </div>
  );
}
