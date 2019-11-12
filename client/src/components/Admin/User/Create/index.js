import React, { Component } from "react";
// import Axios from "axios";
import API from "../../../../utils/API";

class UserCreate extends Component {
  state = {
    firstName: "",
    lastName: "",
    userType: 0,
    username: "",
    userPassword: ""
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state);
    if (
      this.state.firstName &&
      this.state.lastName &&
      this.state.username &&
      this.state.userPassword &&
      this.state.userType
    ) {
      API.postUser({
        fName: this.state.firstName,
        lName: this.state.lastName,
        username: this.state.username,
        password: this.state.userPassword,
        userType: this.state.userType
      });
      console.log({
        fName: this.state.firstName,
        lName: this.state.lastName,
        username: this.state.username,
        password: this.state.userPassword,
        userType: this.state.userType
      });
    }
  };

  render() {
    return (
      <div>
        <form>
          First Name: <br />
          <input
            type="text"
            name="firstName"
            onChange={this.handleInputChange}
          />
          <br />
          Last Name: <br />
          <input
            type="text"
            name="lastName"
            onChange={this.handleInputChange}
          />
          <br />
          <select name="userType" onChange={this.handleInputChange}>
            <option value="0">Base (0)</option>
            <option value="1">Supervisor (1)</option>
            <option value="2">Manager (2)</option>
            <option value="3">Admin (3)</option>
          </select>{" "}
          <br />
          Username: <br />
          <input
            type="text"
            name="username"
            onChange={this.handleInputChange}
          />{" "}
          <br />
          Password: <br />
          <input
            type="password"
            name="userPassword"
            onChange={this.handleInputChange}
          />
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

export default UserCreate;
