import { useNavigate } from "react-router-dom";
import "../components/CSS/rsvp.css";
import { useEffect, useState } from "react";


interface RSVPProp {
  loggedIn: boolean;
  setLoggedIn: Function;
  groupId: number;
  setGroupId: Function;
}

export default function rsvp({loggedIn, setLoggedIn, groupId, setGroupId}: RSVPProp) {
  const [isAttending, setIsAttending] = useState(-1);
  const family: string[] = []
  const rsvpStatus: string[] = []
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
 
  fetch(`http://localhost:3000/getFamily/${groupId}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      console.log(data.details.names[0])


      for (const names of data.details.names) {
        family.push(names);
      }
      for (const coming of data.details.coming) {
        rsvpStatus.push(coming);
      }
    }
  );


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
