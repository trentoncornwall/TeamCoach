import React from "react";
import "./style.css";

const SimpleContainer = props => {
  return (
    <div className="areaContainer">
      <span className="planContainerName">{props.focusArea.name}: </span>
    </div>
  );
};

export default SimpleContainer;
