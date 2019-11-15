import React from "react";
import "./style.css";



const DisplayTeams = ({ children }) => {
    return (
        <div className="team-list">
            { children }
        </div>
    );
};



export default DisplayTeams