import React, { Component } from "react";
import API from "../utils/API";
import MainPanel from "../components/MainPanel";
import UserComp from "../components/Admin/User";
import UserCreate from "../components/Admin/User/Create";

class Admin extends Component {
  // Create_User States + Store All Users for Render
  state = {
    create_firstName: "",
    create_lastName: "",
    create_userType: 0,
    create_email: "",
    create_password: "",
    // ALL USERS
    userData: []
  };

  // Handle Delete User
  deleteButtonClick = event => {
    const id = event.target.id;
    let data = {
      _id: id
    };
    console.log(data);
    API.deleteUser(data).then(this.loadUsers());
  };

  // Handle Input Changes for Create_User
  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // Handle Submit for Create_User
  handleSubmit = event => {
    event.preventDefault(); //Prevent Refresh
    API.postUser({
      fName: this.state.create_firstName,
      lName: this.state.create_lastName,
      email: this.state.create_email,
      password: this.state.create_password,
      userType: this.state.create_userType
    }) //Post User to DB and Clear States
      .then(() => {
        this.setState({
          create_firstName: "",
          create_lastName: "",
          create_userType: 0,
          create_email: "",
          create_password: "",
          userData: []
        });
        // Reload
        this.loadUsers();
      });
  };

  // handleUpate = event => {
  //   console.log(event.target.id);
  // };

  // Load User Data
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

  // Init Users
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
            email={user.email}
            fullName={user.fName + " " + user.lName}
            // Functions Pass
            handleInputChange={this.handleInputChange}
            delete={this.deleteButtonClick}
          />
        ))}

        <UserCreate
          // Functions Pass *different prop names?*
          HIC={this.handleInputChange}
          HS={this.handleSubmit}
          // Pass State so that values are synced to state at all times
          state={this.state}
        />
      </MainPanel>
    );
  }
}

export default Admin;
