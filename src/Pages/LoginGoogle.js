import "../App.css";
import React from "react";
import signInWithGoogle from "../firebase/auth";

function LoginGoogle() {

  async function handleClick(e) {
    e.preventDefault();
    const user = await signInWithGoogle();
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
