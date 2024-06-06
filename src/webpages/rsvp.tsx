import { useNavigate } from "react-router-dom";
import "../components/CSS/rsvp.css";
import { useEffect, useState } from "react";
import { server_endpoint } from "../serverEndpoint";


interface RSVPProp {
  loggedIn: boolean;
  setLoggedIn: Function;
  groupId: number;
  setGroupId: Function;
}

export default function RSVP({loggedIn, setLoggedIn, groupId, setGroupId}: RSVPProp) {

  const [family, setFamily] = useState([])
  const [rsvpStatus, setRsvpStatus] = useState([])
  const [rsvpError, setRsvpError] = useState(false);
  const [rsvpSuccess, setRsvpSuccess] = useState(false)

  const navigate = useNavigate();

  function getRsvpDetails(event: React.FormEvent) {
    var rsvpStausCopy: string[] = rsvpStatus;
    for (const i in family) {
      var currIndex = parseInt(i) * 2;
      const isComing: boolean = event.target[currIndex].checked;
      currIndex++;
      const isNotComing: boolean = event.target[currIndex].checked;
      
      console.log(isComing, isNotComing)
      if (isComing) {
        setRsvpError(false)
        const nextComingArr = rsvpStausCopy.map((s, index) => {
          if (index === parseInt(i)) {
            return "Coming";
          } else {
            return s
          }
          
        })
        rsvpStausCopy = nextComingArr
        console.log(`rsvp copy = ${rsvpStausCopy}`);

      } else if (isNotComing) {
        setRsvpError(false)
        const nextComingArr = rsvpStausCopy.map((s, index) => {
          if (index === parseInt(i)) {
            return "Not Coming";
          } else {
            return s
          }
        })
        rsvpStausCopy = nextComingArr
        console.log(`rsvp copy = ${rsvpStausCopy}`);
      } else {
        console.log("Got a false false, rsvp error is true")
        setRsvpError(true);
        setRsvpSuccess(false);
        return
      }
    }
    
    return rsvpStausCopy;

  }

  function updateMongo(rsvpStatusCopy: string[]) {
    if (!rsvpError) {
      fetch(`${server_endpoint}/setRsvpStatus/${groupId}`, {
        method: 'PUT',
        body: JSON.stringify({
          rsvpStatus: rsvpStatusCopy
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.message === 'Successful') {
          setRsvpSuccess(true)
        }
      })
    }
  }

  function handleRSVPSubmission(event: React.FormEvent) {
    event.preventDefault();
    setRsvpSuccess(false)
    const rsvpStatusCopy = getRsvpDetails(event);
    console.log(`rsvpError = ${rsvpError}`)
    if (rsvpStatusCopy) {
      updateMongo(rsvpStatusCopy)
    }
  }

  function handleChangeEmail() {
    window.localStorage.setItem('loggedIn', 'false');
    window.localStorage.setItem('groupID', '-1');
    return;
  }

  function goHome() {
    handleChangeEmail()
    return;
  }

  // Making sure someone has already given their email before they try to rsvp

  useEffect(() => {
    if (!loggedIn) {
      navigate("/login");
    }
    fetch(`${server_endpoint}/getFamily/${groupId}`)
    .then(res => res.json())
    .then(data => {
      setFamily(data.details.names)
      setRsvpStatus(data.details.coming)
    })
  }, [])

  return (
    <>
      <form id="rsvpSubmission_form" onSubmit={handleRSVPSubmission}>
        {family.map((name, i) => (
          <>
            <span className="rsvp_guestName">{name}</span>
            <div className="rsvpRadioOptions">
              <span>
                <input type="radio" name={`${i}_rsvpStatus`} value="coming"  id={`${i}_coming`} defaultChecked/>
                <label htmlFor={`${i}_coming`}>Coming</label>
              </span>
              <span>
                <input type="radio" name={`${i}_rsvpStatus`} value="notComing" id={`${i}_notComing`}/>
                <label htmlFor={`${i}_notComing`}>Not coming</label>
              </span>
            </div>
         
          </>
        ))}
        <button id="rsvp_SubmitButton">Submit</button>
        {rsvpError && <span className="rsvp_ErrorMessage">Error: ensure a selection has been made for all guests</span>}
        {rsvpSuccess && <span className="rsvp_SuccessMessage">Success: your response has been saved</span>}
        <a id="rsvp-changeEmail" href="/login" onClick={handleChangeEmail}>Change Email</a>
        <a id="rsvp-goHome" href="/" onClick={goHome}>Go Home</a>
      </form>
    </>
  );
}
