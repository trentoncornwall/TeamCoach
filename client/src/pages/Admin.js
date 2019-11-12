import React, { Component } from "react";
import API from "../utils/API";
import MainPanel from "../components/MainPanel";
import UserComp from "../components/Admin/User";
import UserCreate from "../components/Admin/User/Create";

class Admin extends Component {
  state = {
    userData: []
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

        <UserCreate />
      </MainPanel>
    );
  }
}

export default Admin;
