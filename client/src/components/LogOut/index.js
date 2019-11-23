import React from "react";
import "./style.css";

function LogOut(props) {
  return (
    <button className="LogOutButton" onClick={props.onClick}>
      logout
    </button>
  );
}
export default LogOut;
