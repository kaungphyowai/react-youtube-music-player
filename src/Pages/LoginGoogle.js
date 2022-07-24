import "../App.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import signInWithGoogle from "../firebase/auth";
import { getAuth } from "firebase/auth";

function LoginGoogle() {
  let navigate = useNavigate();

  async function handleClick(e) {
    e.preventDefault();
    // const user = await signInWithGoogle();
    console.log(getAuth().currentUser)
    // if (user) {

    //   navigate("/music-input");
    // }
  }

  return (
    <form class="loginForm">
      <div class="loginCnt">
        <button class="loginBtn" onClick={handleClick}>
          Login with Google
        </button>
      </div>
    </form>
  );
}

export default LoginGoogle;
