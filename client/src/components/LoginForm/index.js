import React from "react";
import "./index.css";

function Login() {
	return (
    <div>
        <h1><img src="./images/logo.svg" alt="Logo" className="logo"/> Team<span className="companyName">Coach</span></h1>
        <form>
            User Name:<br />
            <input type="text"></input>
            <br />
            Password:<br />
            <input type="password"></input>
            <br /><br />
            <input type="submit" value="Login" className="loginSubmit"></input>
        </form>
    </div>
    )
}

export default Login;