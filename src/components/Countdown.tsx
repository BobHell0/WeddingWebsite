import React, { useEffect, useState } from "react";
import "./CSS/Countdown.css";
interface CountdownProps {
  epochDeadline: number;
}

export default function Countdown({ epochDeadline }: CountdownProps) {
  var currTime = new Date().getTime();
  var timeLeft = epochDeadline - currTime;

  const [seconds, setSeconds] = useState(
    Math.floor((timeLeft % (1000 * 60)) / 1000)
  );
  const [minutes, setMinutes] = useState(
    Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
  );
  const [hours, setHours] = useState(
    Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const [days, setDays] = useState(
    Math.floor(timeLeft / (1000 * 60 * 60 * 24))
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds((c) => c - 1);
      } else if (minutes > 0) {
        setMinutes((c) => c - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours((c) => c - 1);
        setMinutes(59);
        setSeconds(59);
      } else if (days > 0) {
        setDays((c) => c - 1);
        setHours(23);
        setMinutes(59);
        setSeconds(59);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [seconds, minutes, hours, days]);

  const strArr = ["days", "hours", "minutes", "seconds"];
  const valArr = [days, hours, minutes, seconds];
  const NUM_UNITS = 4;

  return (
    // <div id="countdownContainer">
    //   {strArr.map((strItem, index) => (
    //     <div className="countdownPanel" key={index}>
    //       <span className="countdownVal">{`${valArr[index]}`}</span>
    //       {index !== NUM_UNITS - 1 && <span className="countdownColon">:</span>}
    //       <div className="flexBreak"></div>
    //       <div className="countdownStr">{strItem}</div>
    //     </div>
    //   ))}
    // </div>
    <div id="countdownContainer">
      {strArr.map((strItem, index) => (
        <div className="countdownPanel">
          <div className="countdownVal">{valArr[index]}</div>
          {index < strArr.length - 1 && <div className="countdownColon">:</div>}
          <div className="flexBreak"></div>
          <div className="countdownStr">{strItem}</div>

        </div>
      )) 

      }

    </div>



  );
}
