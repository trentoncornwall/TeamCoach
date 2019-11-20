import React, { Component } from "react";
import API from "../utils/API";
import AdminPanel from "../components/Admin/AdminPanel";
import UserComp from "../components/Admin/User";
import UserCreate from "../components/Admin/User/Create";
import TeamCreate from "../components/Admin/Team/Create";
const bcrypt = require("bcryptjs");

class Admin extends Component {
  // Create_User States + Store All Users for Render
  state = {
    create_firstName: "",
    create_lastName: "",
    create_userType: 0,
    create_email: "",
    create_password: "",
    create_teamID: "",

    create_teamName: "",
    // ALL USERS
    userData: [],
    teamData: []
  };

  refresh = () => {
    this.setState({
      create_firstName: "",
      create_lastName: "",
      create_userType: 0,
      create_email: "",
      create_password: "",
      create_teamName: "",
      userData: []
    });

    this.loadTeams();
    this.loadUsers();
  };

  // Handle Delete User
  deleteButtonClick = event => {
    const id = event.target.id;
    let data = {
      _id: id
    };
    console.log(data);
    API.deleteUser(data).then(this.refresh());
  };

  // Handle Input Changes for Create_User
  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleTeamSubmit = event => {
    event.preventDefault();
    API.createTeam({
      teamName: this.state.create_teamName
    }).then(() => {
      // console.log("team created");
      this.refresh();
    });
  };

  // Handle Submit for Create_User
  handleSubmit = event => {
    event.preventDefault(); //Prevent Refresh
    this.hashPassword(this.state.create_password)
    
    // API.insertUser({

    // create_teaminsert: "",
    // })
  };

  postUser=()=>{
    API.postUser(
      {
        fName: this.state.create_firstName,
        lName: this.state.create_lastName,
        email: this.state.create_email,
        password: this.state.create_password,
        userType: this.state.create_userType
      },
      this.state.create_teamID
    ) //Post User to DB and Clear States
      .then(() => {
        // Reloa
        this.refresh();
      });
  }

hashPassword = (password) => {
  const that = this
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      that.setState({create_password: hash},()=>{
        that.postUser();
      });
    })
  })
}

// setHashPassword = (hash) => {
//   this.setState({create_password: hash})
// };

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

  loadTeams = () => {
    API.allTeams()
      .then(data => {
        var dataArr = [];
        data.data.forEach(user => {
          dataArr.push(user);
        });
        this.setState({ teamData: dataArr });
      })
      .catch(err => {
        console.log(err);
      });
  };

  // Init Users
  componentDidMount() {
    this.loadUsers();
    this.loadTeams();
  }

  render() {
    return (
      <AdminPanel>
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
        <TeamCreate
          HIC={this.handleInputChange}
          HTS={this.handleTeamSubmit}
          state={this.state}
        />
      </AdminPanel>
    );
  }
}

export default Admin;
