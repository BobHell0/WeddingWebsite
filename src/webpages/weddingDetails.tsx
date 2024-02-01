import Navbar from "../components/Navbar";
import "../components/CSS/weddingDetails1.css";
import "../components/CSS/weddingDetails2.css";

import weddingVenue from "../assets/images/weddingDetails/weddingLocale.jpg";
import weddingCake from "../assets/images/weddingDetails/weddingCake.jpg";

export default function weddingDetails() {
  const winWidth = window.outerWidth;
  const imgWidth = (2 / 3) * winWidth;
  const textSecWidth = winWidth - imgWidth;

  return (
    <>
      <Navbar />
      {/* Address Section */}
      <div className="wdContainer">
        <img style={{ width: `${imgWidth}px` }} src={weddingVenue}></img>
        <div style={{ width: `${textSecWidth}px` }} className="textContainer">
          <span
            className="addressText"
            style={{ fontSize: `${winWidth / 37}px` }}
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
      <div className="wdContainer">
        <img
          style={{ width: `${imgWidth}px`, float: "right" }}
          src={weddingCake}
        ></img>
        <div style={{ width: `${textSecWidth}px` }} className="textContainer">
          <span className="dateText" style={{ fontSize: `${winWidth / 37}px` }}>
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
