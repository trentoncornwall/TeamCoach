import React, { Component } from "react";
import API from "../utils/API";

class Admin extends Component {
  state = {
    userData: []
  };

  loadUsers = () => {
    API.getUsers()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.loadUsers();
  }

  render() {
    return <h1>Admin</h1>;
  }
}

export default Admin;
