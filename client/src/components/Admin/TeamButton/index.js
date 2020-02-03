import React from "react";
import "./style.css";

function Teams(props) {
  return (
    <span
      className={props.active ? "TeamsButtonActive" : "TeamsButton"}
      onClick={props.onClick}
    >
      Teams
    </span>
  );
}
export default Teams;
