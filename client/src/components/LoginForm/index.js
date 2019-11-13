import React from "react";
import "./index.css";

function Login() {
	return (
    <div>
        <h1 className="loginTitle"><img src="./images/logo.svg" alt="Logo" className="logo"/> Team<span className="companyName">Coach</span></h1>
        <form>
            <p className="loginFieldTitle" >User Name:</p>
            <input type="text" className="loginField" ></input>
            <p className="loginFieldTitle" >Password:</p>
            <input type="password" className="loginField" ></input>
            <input type="submit" value="Login" className="loginSubmit"></input>
        </form>
    </div>
    )
}

export default Login;