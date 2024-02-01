import "../components/CSS/Login.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      {/* <div id="mainLoginTitle">Login</div> */}
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
          <button id="submitBttn">SUBMIT</button>
          <div className="break"></div>
          <Link className="linkBack" to="/" id="goBack">
            Home
          </Link>
        </form>
      </div>
    </>
  );
}
