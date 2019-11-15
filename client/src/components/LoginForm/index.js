import React, { Component } from 'react';
import "./index.css";

class Login extends Component {
    state = {
        userName: "",
        password: ""
    }
    
    handleInputChange = event => {
        const{name,value} = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <h1 className="loginTitle"><img src="./images/logo.svg" alt="Logo" className="logo"/> Team<span className="companyName">Coach</span></h1>
                <form>
                    <p className="loginFieldTitle" >User Name:</p>
                    <input type="text" className="loginField" name="userName" value={this.state.userName} onChange={this.handleInputChange}></input>
                    <p className="loginFieldTitle" >Password:</p>
                    <input type="password" className="loginField" name="passWord" value={this.state.passWord} onChange={this.handleInputChange}></input>
                    <input type="submit" value="Login" className="loginSubmit"></input>
                </form>
            </div>
        );
    }
}

export default Login;