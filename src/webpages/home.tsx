import Navbar from "../components/Navbar";
import Title from "../components/Title";
import ScrollButton from "../components/ScrollButton";
import Countdown from "../components/Countdown.js";

export default function Home() {
  return (
    <>
      <Navbar />
      <Title title="Dhivya and Ashantth" />
      <a href="#countdownContainer">
        {window.innerHeight < window.innerWidth && (
          <ScrollButton rotation={0} y={-6} />
        )}
      </a>
      <a href="#bgContainer">
        {window.innerHeight < window.innerWidth && (
          <ScrollButton rotation={180} y={90} />
        )}
      </a>
      <Countdown epochDeadline={new Date("Jan 1 , 2025 00:00:00").getTime()} />
    </>
  );
}
