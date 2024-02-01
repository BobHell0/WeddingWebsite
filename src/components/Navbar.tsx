import "./CSS/Navbar.css";
import NavSlider from "./NavSlider";
import { Link } from "react-router-dom";
import { useState } from "react";

const SLIDER_WIDTH = 80;

// ["Gallery", "Wedding Details", "RSVP"]
function Navbar() {
  let headings = ["Gallery", "Wedding Details", "RSVP"].reverse();
  if (window.outerHeight < window.outerWidth) {
    return (
      <nav>
        <Link className="test" to="/">
          <div className="homeSeg">Dhivya and Ashantth</div>
        </Link>
        {headings.map((item, index) => (
          <Link
            className="test"
            to={item === "RSVP" ? "/login" : "/" + item.toLowerCase()}
            key={index}
          >
            <div className="navbarSeg" key={index}>
              {item}
            </div>
          </Link>
        ))}
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
        <Link className="test" to="/">
          <div className="homeSeg">Dhivya and Ashantth</div>
        </Link>
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
