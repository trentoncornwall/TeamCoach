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
    email: "",
    userPassword: "",
    userData: []
  };

  deleteButtonClick = event => {
    const id = event.target.id;
    let data = {
      _id: id
    };
    console.log(data);
    API.deleteUser(data).then(this.loadUsers());
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
      this.state.email &&
      this.state.userPassword &&
      this.state.userType
    ) {
      API.postUser({
        fName: this.state.firstName,
        lName: this.state.lastName,
        email: this.state.email,
        password: this.state.userPassword,
        userType: this.state.userType
      });
      console.log({
        fName: this.state.firstName,
        lName: this.state.lastName,
        email: this.state.email,
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
            email={user.email}
            handleInputChange={this.handleInputChange}
            delete={this.deleteButtonClick}
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
