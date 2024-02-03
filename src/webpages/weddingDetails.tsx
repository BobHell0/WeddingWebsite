import { useEffect, useRef, useState } from "react";

import Navbar from "../components/Navbar";
import "../components/CSS/weddingDetails1.css";
import "../components/CSS/weddingDetails2.css";

import weddingVenue from "../assets/images/weddingDetails/weddingLocale.jpg";
import weddingCake from "../assets/images/weddingDetails/weddingCake.jpg";

export default function weddingDetails() {
  const [winWidth, setWinWidth] = useState(window.innerWidth);
  const [winHeight, setWinHeight] = useState(window.outerHeight);

  let imgWidth = (2 / 3) * winWidth;
  let textSecWidth = winWidth - imgWidth;

  const container1Ref = useRef<HTMLDivElement>(null);
  const addRef = useRef<HTMLDivElement>(null);
  const container2Ref = useRef<HTMLDivElement>(null);
  const DnTRef = useRef<HTMLElement>(null);

  const isLandscape = winWidth > winHeight ? true : false;

  // fade-in animation for landscsape screens
  useEffect(() => {
    const handleScroll = () => {
      if (!container1Ref.current) {
        throw Error("container1Ref not assigned (weddingDetails.tsx)");
      }
      if (!addRef.current) {
        throw Error("addRef not assigned (weddingDetails.tsx)");
      }
      if (!container2Ref.current) {
        throw Error("Ref container2Ref not assigned (weddingDetails.tsx)");
      }
      if (!DnTRef.current) {
        throw Error("DnTRef not assigned (weddingDetails.tsx)");
      }

      const addressHeaderInfo = addRef.current.getBoundingClientRect();
      // const dateAndTimeInfo = DnTRef.current.getBoundingClientRect();

      // Landscape
      if (window.innerHeight < window.innerWidth) {
        if (addressHeaderInfo.y < -10) {
          container2Ref.current.className = "wdContainer";
        }
        // container2Ref.current.className = "wdContainer";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWinWidth(window.innerWidth);
      setWinHeight(window.outerHeight);
      imgWidth = (2 / 3) * winWidth;
      textSecWidth = winWidth - imgWidth;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Navbar />
      {/* Address Section */}
      <div className="wdContainer" ref={container1Ref}>
        <img style={{ width: `${imgWidth}px` }} src={weddingVenue}></img>
        <div style={{ width: `${textSecWidth}px` }} className="textContainer">
          <span
            className="addressText"
            style={{ fontSize: `${winWidth / 37}px` }}
            ref={addRef}
          >
            Address
          </span>
          <span
            className="addressText"
            style={{
              marginTop: "8%",
              fontSize: `${winWidth / 52}px`,
            }}
          >
            Fake Venue
            <br></br>
            21 Fake Street, Fake Suburb 2100
          </span>
        </div>
      </div>

      {/* Date + Time Section */}
      <div
        className={isLandscape ? "wdContainerInvis" : "wdContainer"}
        ref={container2Ref}
      >
        <img
          style={{ width: `${imgWidth}px`, float: "right" }}
          src={weddingCake}
        ></img>
        <div style={{ width: `${textSecWidth}px` }} className="textContainer">
          <span
            className="dateText"
            style={{ fontSize: `${winWidth / 37}px` }}
            ref={DnTRef}
          >
            Date & Time
          </span>
          <span
            className="dateText"
            style={{
              marginTop: "8%",
              fontSize: `${winWidth / 52}px`,
            }}
          >
            10:00 am
            <br></br>
            1st of January, 2025
          </span>
        </div>
      </div>
    </>
  );
}
