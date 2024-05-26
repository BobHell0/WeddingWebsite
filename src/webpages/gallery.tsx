import Navbar from "../components/Navbar";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../components/CSS/Slideshow.css";

import img0 from "../assets/images/galleryImages/pexels-eberhard-grossgasteiger-443446.jpg";
import img1 from "../assets/images/galleryImages/pexels-pixabay-33109.jpg";
import img2 from "../assets/images/galleryImages/pexels-pixabay-60597.jpg";
import img3 from "../assets/images/galleryImages/pexels-yuliya-strizhkina-1198802.jpg";

export default function Gallery() {
  let headings = ["Gallery", "Wedding Details", "RSVP"].reverse();
  const imgArr = [img0, img1, img2, img3];

  return (
    <>
      <Navbar></Navbar>
      <div className="slideShowContainer">
        <Slide
          prevArrow={<button className="arrowStyling" id="leftArrow"></button>}
          nextArrow={<button className="arrowStyling" id="rightArrow"></button>}
          slidesToScroll={2} slidesToShow={2}
        >
          {imgArr.map((item, index) => (
            <div className="each-slide-effect" key={index}>
              <div className="slideShowImgContainer" key={index}>
                <img src={item} className="slideShowImg" key={index}></img>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </>
  );
}
