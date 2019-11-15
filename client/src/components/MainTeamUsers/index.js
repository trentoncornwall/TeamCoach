import React from "react";
import "./style.css";



const MainTeamUsers = ({ children }) => {
    return (
        <div className="userContainer">
            <ul className="team-member-name">{children}
            </ul>
            
        </div>
    );
};



export default MainTeamUsers