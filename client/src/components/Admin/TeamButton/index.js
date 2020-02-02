import React from "react";
import "./style.css";

function Teams(props) {
  return (
    <button
      className={props.active ? "TeamsButtonActive" : "TeamsButton"}
      onClick={props.onClick}
    >
      Teams
    </button>
  );
}
export default Teams;
