import React from "react";
import "./style.css";

function AdminPanel({ children }) {
  return (
    <div className="AdminPanelBackground">
      <div className="AdminPanelInfo">{children}</div>
    </div>
  );
}
export default AdminPanel;
