import React, { Component } from "react";
import API from "../../utils/API";
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
    if (!this.state.email || !this.state.password) {
      this.setState({ error: "Please fill out all fields" });
    } else {
      API.checkLogin(
        {
          email: this.state.email,
          password: this.state.password
        },
        this.state.email
      )
        .then(res => {
          const userInfo = res.data;

          switch (userInfo.userType) {
            case 0:
              window.location = "/teams";
              break;
            case 1:
              window.location = "/main";
              break;
            case 2:
              window.location = "/main";
              break;
            case 3:
              window.location = "/admin";
              break;
            default:
              // window.location = "/"
              console.log("logged in");
              break;
          }
        })
        .catch(e => {
          switch (e.response.data) {
            case "Bad Request":
              this.setState({ error: "Incorrect Username or Password" });
              break;
            case "Unauthorized":
              this.setState({ error: "Incorrect Username or Password" });
              break;
            default:
              this.setState({ error: "There was an error. Please try again." });
          }
        });
    }
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
