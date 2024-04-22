import "../components/CSS/Login.css";
import React, { EventHandler, useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [providedEmail, setProvidedEmail] = useState("");

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
    fetch(`./localhost:3000/checkLogin/${providedEmail}`, {
      method: "GET",
    });
  };

  return (
    <>
      <div id="formContainer">
        <form
          autoComplete="off"
          id="loginForm"
          onSubmit={handleLoginSubmission}
        >
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
          <button id="submitBttn">
            <span>Verify</span>
          </button>
          <div className="break"></div>
          <Link className="linkBack" to="/" id="goBack">
            Home
          </Link>
          <a
            href="#help"
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
      </div>

      <section id="help" style={{ marginBottom: "50vh" }}>
        Please contact 000 for emergencies.
      </section>
    </>
  );
}
