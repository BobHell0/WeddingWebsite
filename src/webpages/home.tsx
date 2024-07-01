import Navbar from "../components/Navbar";
import Title from "../components/Title";
import ScrollButton from "../components/ScrollButton";
import Countdown from "../components/Countdown.js";
import weddingDate from "../date"

export default function Home() {
  return (
    <>
      <Navbar />
      <Title title="Dhivya and Ashantth" />
      <a href="#countdownContainer">
        {window.innerHeight < window.innerWidth && (
          <ScrollButton rotation={0} y={-12} />
        )}
      </a>
      <a href="#bgContainer">
        {window.innerHeight < window.innerWidth && (
          <ScrollButton rotation={180} y={90} />
        )}
      </a>
      <Countdown epochDeadline={new Date(weddingDate).getTime()} />
    </>
  );
}
