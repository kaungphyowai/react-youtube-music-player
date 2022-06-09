
import "../App.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function LoginGoogle() {
  let navigate = useNavigate();

  function handleClick(){
    navigate("/music-input")
  }

  return (
    <form>
      <button onClick={handleClick}>Login with Google</button>
    </form>
  );
}

export default LoginGoogle;
