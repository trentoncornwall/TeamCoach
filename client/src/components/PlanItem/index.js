import React from "react";
import "./style.css";

const PlanItem = props => {
  return <div className="plan-list">{props.name}</div>;
};

export default PlanItem;
