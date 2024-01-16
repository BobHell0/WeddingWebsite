import Navbar from "../components/Navbar";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../components/CSS/Slideshow.css";

import img0 from "./download.jpg";
import img1 from "./download-1.jpg";
import img2 from "./download-2.jpg";

export default function Gallery() {
  let headings = ["Gallery", "Wedding Details", "RSVP"].reverse();

  return (
    <>
      <Navbar></Navbar>
      <div className="slideShowContainer">
        <Slide>
          <div className="each-slide-effect">
            <div className="slideShowImgContainer">
              <img src={img0} className="slideShowImg"></img>
            </div>
          </div>
          <div className="each-slide-effect">
            <div className="slideShowImgContainer">
              <img src={img1} className="slideShowImg"></img>
            </div>
          </div>
          <div className="each-slide-effect">
            <div className="slideShowImgContainer">
              <img src={img2} className="slideShowImg"></img>
            </div>
          </div>
        </Slide>
      </div>
    </>
  );
}
