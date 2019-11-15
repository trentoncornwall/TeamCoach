import React from "react";
import "./style.css";



const MainTeamUsers = ({ children }) => {
    return (
        <div className="userContainer">
            <ul>{children}
            </ul>
            
        </div>
    );
};



export default MainTeamUsers