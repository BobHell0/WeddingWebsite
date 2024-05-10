import { useNavigate } from "react-router-dom";
import "../components/CSS/rsvp.css";
import { useEffect, useState } from "react";


interface RSVPProp {
  loggedIn: boolean;
  userEmail: string
}

export default function rsvp({loggedIn, userEmail}: RSVPProp) {
  const [isAttending, setIsAttending] = useState(-1);
  const navigate = useNavigate();

  function handleClickAttending() {
    setIsAttending(1);
  }

  function handleClickNotAttending() {
    setIsAttending(0);
  }

  // Making sure someone has already given their email before they try to rsvp
  useEffect(() => {
    if (!loggedIn) {
      navigate("/login");
    }
  })

  return (
    <>
      <form id="rsvpSubmission_form">
        <div>
          <label className="rsvpLabel">
            <input
              type="radio"
              id="rsvp_attending"
              name="rsvpResponse"
              onClick={handleClickAttending}
            />
            <span className="rsvpText">Attending</span>
          </label>

          {isAttending == 1 && (
            <>
              <br></br>
              <label className="rsvpLabel" id="rsvpLabelNumPeople">
                <span>Number Attending: </span>
                <input id="rsvpNumPeopleInput" type="text"></input>
              </label>
              <br></br>
            </>
          )}
          <br></br>
          <label className="rsvpLabel">
            <input
              type="radio"
              id="rsvp_notAttending"
              name="rsvpResponse"
              onClick={handleClickNotAttending}
            />
            <span className="rsvpText">Not Attending</span>
          </label>
        </div>

        <button id="rsvp_SubmitButton">Submit</button>
      </form>
    </>
  );
}
