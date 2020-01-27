import React from "react";
import "./style.css";

const MainTeamUsers = ({ children }) => {
  return (
    <div className="userContainer">
      <div className="team-member-name">{children}</div>
    </div>
  );
};

export default MainTeamUsers;
