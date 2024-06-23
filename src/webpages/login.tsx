import "../components/CSS/Login.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { server_endpoint } from "../serverEndpoint";


const INVALID_GUEST_NAME = -1

interface LoginProp {
  loggedIn: boolean;
  setLoggedIn: Function;
  groupId: number;
  setGroupId: Function;
}

export default function Login({loggedIn, setLoggedIn, groupId, setGroupId}: LoginProp) {
  const [providedName, setProvidedName] = useState("");
  const [attemptingLogin, setAttemptingLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false)
  
  const navigate = useNavigate();

  
  const handleChangingName = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event === null || event.target === null) {
      return;
    }
    setProvidedName(event.target.value);
    return;
  };

  const handleLoginSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAttemptingLogin(true);
    await fetch(`${server_endpoint}/checkLogin/${providedName}`, {
      mode: 'cors',
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((res) => res.json())
      .then((objectData) => {
        console.log(objectData)
        const groupId = objectData.GroupID;
        console.log(groupId)
        if (groupId === INVALID_GUEST_NAME) {
          console.log("INVALID Name PROVIDED")
          setErrorMessage(true);
        } else {
          console.log("GOOD Name FOUND");
          setLoggedIn(true)
          setGroupId(groupId);
          window.localStorage.setItem('loggedIn', `${true}`)
          window.localStorage.setItem('groupID', `${groupId}`)
          setErrorMessage(false);
          navigate("/rsvp");
        }
      });
    setAttemptingLogin(false);
  };

  // useEffect(() => {
    
  // })


  return (
    <>
      <div id="formContainer">
        <form
          autoComplete="off"
          id="loginForm"
          onSubmit={handleLoginSubmission}
        >
          <div className="break"></div>
          <label>
            <input
              onChange={handleChangingName}
              type="text"
              className="loginInput"
              name="Name"
              autoComplete="off"
              placeholder={"Full name (as per your invitation)"}
            />
          </label>
          <div className="break"></div>

          <div className="break"></div>
          <button id="submitBttn">
            <span>Verify</span>
          </button>
          <div className="break"></div>
          <div className="break"></div>
          
          <Link className="linkBack" to="/" id="goBack">
            Home
          </Link>
          <a
            href="#help"
            className="linkBack"
            style={{
              position: "relative",
              top: "5vh",
              marginTop: "10vh",
              marginLeft: "-50px",
              fontSize: "12px",
            }}
          >
            Need Help?
          </a>
        </form>
        {errorMessage && <section id="loginError" >Guest name not found</section>}
      </div>
      <section id="help" style={{ marginBottom: "50vh" }}>
        Please contact 000 for emergencies.
      </section>
    </>
  );
}
