import React, { Component } from "react";
import API from "../utils/API";
import MainPanel from "../components/MainPanel";
import UserComp from "../components/Admin/User";
import UserCreate from "../components/Admin/User/Create";

class Admin extends Component {
  state = {
    userData: []
  };

  deleteButtonClick = id => {
    let data = {
      _id: id
    };
    console.log(data);
    API.deleteUser(data).then(this.loadUsers());
  };

  updateButtonClick = id => {
    console.log(id);
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
            email={user.email}
            fullName={user.fName + " " + user.lName}
            team={user.teamID}
            delete={() => this.deleteButtonClick(user._id)}
            update={() => this.updateButtonClick(user._id)}
          />
        ))}
        <UserCreate />
      </MainPanel>
    );
  }
}

export default Admin;
