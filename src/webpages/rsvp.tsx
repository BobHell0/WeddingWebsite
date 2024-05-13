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
  // const family: string[] = []
  // const rsvpStatus: string[] = []

  const [family, setFamily] = useState([])
  const [rsvpStatus, setRsvpStatus] = useState([])


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
    fetch(`http://localhost:3000/getFamily/${groupId}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      console.log(data.details.names[0])

      console.log(data.details.names)
      // for (const names of data.details.names) {
      //   console.log(names)
      //   // family.push(names);
      //   console.log(family)
      //   setFamily(family + names)
      // }
      setFamily(data.details.names)
      setRsvpStatus(data.details.coming)
    })
  }, [])
 

  console.log(`Family = ${family}`)

  return (
    <>
      <form id="rsvpSubmission_form">
        {family.map(n => (
          <>
            <span>{n}</span>
            <div>
              <input type="radio" name={`${n}_rsvpStatus`} value="coming"  id={`${n}_coming`}/>
              <label htmlFor={`${n}_coming`}>Coming</label>
                <input type="radio" name={`${n}_rsvpStatus`} value="notComing" id={`${n}_notComing`}/>
                <label htmlFor={`${n}_notComing`}>Not coming</label>
            </div>
         

          </>
        ))}
        <button id="rsvp_SubmitButton">Submit</button>
      </form>
    </>
  );
}
