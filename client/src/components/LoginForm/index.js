import React, { Component } from 'react';
import "./index.css";

class Login extends Component {
    state = {
        userName: "",
        password: ""
    }
    
    componentDidMount() {

    }

    handleInputChange = event => {
        const{name,value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.userName)
        console.log(this.state.password)
    }

    render() {
        return (
            <div>
                <h1 className="loginTitle"><img src="./images/logo.svg" alt="Logo" className="logo"/> Team<span className="companyName">Coach</span></h1>
                <form>
                    <p className="loginFieldTitle" >User Name:</p>
                    <input type="text" className="loginField" name="userName" value={this.state.userName} onChange={this.handleInputChange}></input>
                    <p className="loginFieldTitle" >Password:</p>
                    <input type="password" className="loginField" name="password" value={this.state.password} onChange={this.handleInputChange}></input>
                    <input type="submit" value="Login" className="loginSubmit" onClick={this.handleFormSubmit}></input>
                </form>
            </div>
        );
    }
}

export default Login;