import downArrow from "../assets/images/downArrow.svg";

interface ScrollButtonProps {
  y: number;
  rotation: number;
}
export default function ScrollButton({ y, rotation }: ScrollButtonProps) {
  const winWidth = window.innerWidth;

  return (
    <img
      style={{
        position: "relative",
        transform: `rotate(${rotation}deg)`,
        top: `${y}vh`,
        left: "50vw",
        width: "6vh",
        marginLeft: "-3vh",
        height: "6vh",
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
