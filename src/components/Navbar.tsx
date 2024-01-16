import "./CSS/Navbar.css";
import NavSlider from "./NavSlider";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useState } from "react";

const SLIDER_WIDTH = 80;

interface NavbarProps {
  headings: string[];
}
// ["Gallery", "Wedding Details", "RSVP"]
function Navbar() {
  if (window.outerHeight < window.outerWidth) {
    return (
      <nav>
        <Link className="test" to="/">
          <div className="homeSeg">Dhivya and Ashantth</div>
        </Link>
        <Link className="test" to="/rsvp">
          <div className="navbarSeg">RSVP</div>
        </Link>
        <Link className="test" to="/weddingdetails">
          <div className="navbarSeg">Wedding Details</div>
        </Link>
        <Link className="test" to="/gallery">
          <div className="navbarSeg">Gallery</div>
        </Link>

        {/* {headings.map((item, index) => (
          <div className="navbarSeg" key={index}>
            <Link to="/">{item}</Link>
          </div>
        ))} */}
      </nav>
    );
  }
  const [menuVisible, setMenuVisible] = useState(false);
  function handleClickMenu() {
    if (!menuVisible) {
      setMenuVisible(true);
    } else {
      setMenuVisible(false);
    }
  }

  document.addEventListener("click", (e) => {
    if (e.clientX < ((100 - SLIDER_WIDTH) / 100) * window.innerWidth) {
      setMenuVisible(false);
    }
  });

  return (
    <>
      <nav>
        <div className="homeSeg">
          <a>Dhivya and Ashantth</a>
        </div>
        <div className="menuButton" onClick={handleClickMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </nav>
      <NavSlider
        showMenu={menuVisible}
        changeShowMenu={setMenuVisible}
        width={SLIDER_WIDTH}
      ></NavSlider>
    </>
  );
}

export default Navbar;
