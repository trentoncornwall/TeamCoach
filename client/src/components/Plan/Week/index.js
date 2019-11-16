import React from "react";
import "./style.css";

function Week(props) {
  return (
    <div className="week">
      <div className="weekNav">
        <span>Week {props.week.weekNumber}</span>
      </div>
      <div className="weekDataContainer">
        <div className="weekPlanning">
          <span className="weekSubText">Planning: </span>
        </div>
        <div className="weekCoaching">
          <span className="weekSubText">Coach Commitment: </span>
        </div>
        <div className="weekEmployee">
          <span className="weekSubText">Employee Commitment:: </span>
        </div>
        <div className="weekResult">
          <span className="weekSubText">Results: </span>
        </div>
      </div>
    </div>
  );
}
export default Week;
