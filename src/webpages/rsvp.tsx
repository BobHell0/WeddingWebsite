import "../components/CSS/rsvp.css";
import { useState } from "react";

export default function rsvp() {
  const [isAttending, setIsAttending] = useState(-1);

  function handleClickAttending() {
    setIsAttending(1);
  }

  function handleClickNotAttending() {
    setIsAttending(0);
  }

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
