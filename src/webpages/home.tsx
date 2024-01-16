import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Countdown from "../components/Countdown.js";

export default function Home() {
  let headings = ["Gallery", "Wedding Details", "RSVP"].reverse();

  return (
    <>
      <Navbar />
      <Title title="Dhivya and Ashantth" />
      <Countdown epochDeadline={new Date("Jan 1 , 2025 00:00:00").getTime()} />
    </>
  );
}
