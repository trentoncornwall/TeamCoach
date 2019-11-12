import React, { Component } from "react";
import API from "../../../../utils/API";

class UserCreate extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    userType: 0,
    userPassword: ""
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  loadUsers = () => {
    API.getUsers()
      .then(data => {
        var dataArr = [];
        data.data.map(user => {
          dataArr.push(user);
        });
        this.setState({ userData: dataArr });
      })
      .catch(err => console.log(err));
  };

  handleSubmit = event => {
    event.preventDefault();

    API.postUser({
      fName: this.state.firstName,
      lName: this.state.lastName,
      email: this.state.email,
      userType: this.state.userType,
      password: this.state.userPassword
    }).then(success => {
      this.loadUsers();
    });
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
          Email: <br />
          <input
            type="text"
            name="email"
            onChange={this.handleInputChange}
          />{" "}
          <br />
          User Type: <br />
          <select name="userType" onChange={this.handleInputChange}>
            <option value="0">Base (0)</option>
            <option value="1">Supervisor (1)</option>
            <option value="2">Manager (2)</option>
            <option value="3">Admin (3)</option>
          </select>{" "}
          <br />
          Password: <br />
          <input
            type="password"
            name="userPassword"
            onChange={this.handleInputChange}
          />
          <br />
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

export default UserCreate;
