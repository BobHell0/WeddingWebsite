import "../components/CSS/Login.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const INVALID_EMAIL = -1

interface LoginProp {
  setLoggedIn: Function;
  setUserEmail: Function
}

export default function Login({setLoggedIn, setUserEmail}: LoginProp) {
  const [providedEmail, setProvidedEmail] = useState("");
  const [attemptingLogin, setAttemptingLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false)
  
  const navigate = useNavigate();

  
  const handleChangingEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event === null || event.target === null) {
      return;
    }
    setProvidedEmail(event.target.value);
    console.log(providedEmail);
    return;
  };

  const handleLoginSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAttemptingLogin(true);
    await fetch(`http://localhost:3000/checkLogin/${providedEmail}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((objectData) => {
        console.log(objectData)
        const data = objectData.GroupID;
        console.log(data)
        if (data === INVALID_EMAIL) {
          console.log("INVALID EMAIL PROVIDED")
          setErrorMessage(true);
        } else {
          console.log("GOOD EMAIL FOUND");
          setLoggedIn(true)
          setUserEmail(providedEmail);
          setErrorMessage(false);
          navigate("/rsvp");
        }
      });
    setAttemptingLogin(false);
  };


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
              onChange={handleChangingEmail}
              type="text"
              className="loginInput"
              name="email"
              autoComplete="off"
              placeholder={"Enter your email"}
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
        {errorMessage && <section id="loginError" >Email not found :(</section>}
      </div>
      <section id="help" style={{ marginBottom: "50vh" }}>
        Please contact 000 for emergencies.
      </section>
    </>
  );
}
