import React from "react";
import "./style.css";

const SimpleContainer = props => {
  return (
    <div className="areaContainer">
      <span className="planContainerName">
        {props.areaName}:<br />
        <textarea
          className="plan-text-area-container"
          onChange={props.onChange}
          value={props.state}
          name={props.name}
        />
      </span>
    </div>
  );
};

export default SimpleContainer;
