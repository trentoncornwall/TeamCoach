import React from "react";
import "./style.css";

const teamSelect = props => {
  return (
    <div className="team-name-container">
      <p className="team-name" onClick={props.onClick}>
        {props.teamName}
      </p>
    </div>
  );
};

export default teamSelect;
