import React, { Component } from "react";
import API from "../../utils/API"
import "./index.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // Check required fields
    if(!this.state.email || !this.state.password ) {
      this.setState({error: "Please fill out all fields"})
    }
    // if (this.state.email === "admin") {
    //   window.location = "/admin";
    // } else if (this.state.email === "manager") {
    //   window.location = "/main";
    // }
    API.checkLogin(
      {
      user: this.state.email,
      password: this.state.password
      },
      this.state.email
    ).then((res) => {
      const accessLevel = res.data
      switch (accessLevel.type) {
        case 0:
          window.location = "/plan/" + accessLevel.id
          break;
        case 1:
          window.location = "/main"
          break;
        case 2:
          window.location = "/main"
          break;
        case 3:
          window.location = "/admin"
          break;
        default:
          break;
      }
    }).catch(e => {
      this.setState({error: e.response.data[Object.keys(e.response.data)[0]] })
    })
  };

  render() {
    return (
      <div>
        <h1 className="loginTitle">
          <img src="./images/logo.svg" alt="Logo" className="logo" /> Team
          <span className="companyName">Coach</span>
        </h1>
        <span className="loginError">{this.state.error}</span>
        <form>
          <p className="loginFieldTitle">User Name:</p>
          <input
            type="text"
            className="loginField"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          ></input>
          <p className="loginFieldTitle">Password:</p>
          <input
            type="password"
            className="loginField"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          ></input>
          <input
            type="submit"
            value="Login"
            className="loginSubmit"
            onClick={this.handleFormSubmit}
          ></input>
        </form>
      </div>
    );
  }
}

export default Login;
