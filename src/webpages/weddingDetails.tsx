import Navbar from "../components/Navbar";
import weddingVenue from "../assets/images/weddingLocale.jpg";
import "../components/CSS/weddingDetails.css";
export default function weddingDetails() {
  const winWidth = window.outerWidth;
  return (
    <>
      <Navbar />
      <div id="container1">
        <img
          style={{ width: `${(2 / 3) * winWidth}px` }}
          src={weddingVenue}
        ></img>
        <div style={{ width: `${(1 / 3) * winWidth}px` }} id="addressContainer">
          <span className="addressText" style={{ fontSize: "42px" }}>
            Address
          </span>
          <span
            className="addressText"
            style={{ marginTop: "84px", fontSize: "28px" }}
          >
            Fake Venue
            <br></br>
            21 Fake Street, Fake Suburb 2100
          </span>
        </div>
      </div>
    </>
  );
}
