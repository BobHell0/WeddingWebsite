import downArrow from "../assets/images/downArrow.svg";

interface ScrollButtonProps {
  y: number;
  rotation: number;
  scrollVal: number;
}
export default function ScrollButton({ y, rotation, scrollVal }: ScrollButtonProps) {
  const windHeight = window.innerHeight;

  const handleOnClick = () => {
    window.scrollTo({
      top: scrollVal * windHeight,
      left: 0,
      behavior: "smooth"
    })
  }
  return (
    <img onClick={handleOnClick}
      style={{
        position: "relative",
        transform: `rotate(${rotation}deg)`,
        top: `${y}vh`,
        left: "50vw",
        width: "40px",
        marginLeft: "-20px",
        height: "40px",
        zIndex: 2,
        border: "black 0.8px solid",
        borderRadius: "50%",
        padding: "5px",
        backgroundColor: "transparent",
        display: "block",
      }}
      src={downArrow}
    ></img>
  );
}
