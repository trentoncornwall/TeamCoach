import React from "react";
import "./index.css";

function Login({ children }) {
	return <div className="LoginPanelBackground" >
        <div className="LoginPanelInfo">
            {children}
        </div>
    </div>;
}

export default Login;