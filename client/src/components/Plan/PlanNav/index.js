import React from "react";
import "./style.css";

function PlanNav(props) {
  return (
    <div className="PlanNav">
      <span className="PlanNav-name">{props.navState.name}</span>
      {/* <span className="date">Start: {props.navState.startDate}</span> */}
      {/* <span className="date">End: {props.navState.endDate}</span> */}
    </div>
  );
}
export default PlanNav;
