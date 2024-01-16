import "./CSS/NavSlider.css";

interface NavSliderProp {
  showMenu: boolean;
  changeShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  width: number;
}

export default function NavSlider({
  showMenu,
  changeShowMenu,
  width,
}: NavSliderProp) {
  if (!showMenu) return;

  const items = ["Gallery", "Wedding Details", "RSVP"];
  return (
    <div className="container" style={{ width: `${width}vw` }}>
      <div className="closeButton">
        <span
          className="closeButtonSpan"
          onClick={() => {
            changeShowMenu(false);
          }}
        >
          &#10006;
        </span>
      </div>
      {items.map((str, index) => (
        <div className="navSeg" key={index} style={{ width: `${width}vw` }}>
          {str}
        </div>
      ))}
    </div>
  );
}
