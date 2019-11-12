import React, { Component } from "react";
import API from "../utils/API";
import MainPanel from "../components/MainPanel";
import UserComp from "../components/Admin/User";
import UserCreate from "../components/Admin/User/Create";

class Admin extends Component {
  state = {
    firstName: "",
    lastName: "",
    userType: 0,
    username: "",
    userPassword: "",
    userData: []
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

  loadUsers = () => {
    API.getUsers()
      .then(data => {
        var dataArr = [];
        data.data.forEach(user => {
          dataArr.push(user);
        });
        this.setState({ userData: dataArr });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.loadUsers();
  }

  render() {
    return (
      <MainPanel>
        <h1>Admin</h1>
        {this.state.userData.map(user => (
          <UserComp
            id={user._id}
            key={user._id}
            type={user.userType}
            fullName={user.fName + " " + user.lName}
            team={user.teamID}
            username={user.username}
          />
        ))}

        <UserCreate
          HIC={this.handleInputChange}
          HS={this.handleSubmit}
          state={this.state}
        />
      </MainPanel>
    );
  }
}

export default Admin;
