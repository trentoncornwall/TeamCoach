import React from "react";
import "./style.css";

function PlanPanel({ children }) {
  return (
    <div className="PlanPanelBackground">
      <div className="PlanPanelInfo">{children}</div>
    </div>
  );
}
export default PlanPanel;
