import "../components/CSS/Login.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div id="formContainer">
        <form autoComplete="off" id="loginForm">
          <label>
            <input
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
