import Navbar from "../components/Navbar";
import Title from "../components/Title";
import ScrollButton from "../components/ScrollButton";
import Countdown from "../components/Countdown.js";
import weddingDate from "../date"
import Profile from "../components/Profile";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <Title title="Dhivya and Ashantth" />
      {window.innerHeight < window.innerWidth && (
        <ScrollButton rotation={0} y={-6} scrollVal={0.92 + 0.88}/>
      )}

      {window.innerHeight < window.innerWidth && (
        <ScrollButton rotation={180} y={92} scrollVal={0}/>
      )}
      <Countdown epochDeadline={new Date(weddingDate).getTime()} />

      
      {window.innerHeight < window.innerWidth && (
        <ScrollButton rotation={0} y={-1} scrollVal={3}/>
      )}

      <Profile />


    </>
  );
}
