import React, { Component } from "react";
import MainPanel from "../components/MainPanel";
import MainNav from "../components/MainNav";
import TeamName from "../components/TeamName";
import TeamList from "../components/TeamList";
import API from "../utils/API";
import MainTeamUsers from "../components/MainTeamUsers";
class Teams extends Component {
  state = {
    data: [],
    currentUser: [],
    teamUsers: []
  };
  onTeamClick(users) {
    // const usersArray = id;
    console.log(users);
    this.setState({ teamUsers: users });
  }

  onUserClick(plans, userId) {
    console.log(plans);
    console.log("useid", userId);
    this.setState({ currentUser: userId, teamUsers: plans });
    API.postPlan(
      {
        focusArea: {
          uBehavior: "test",
          dBehavior: "tester"
        },
        blahblah: "telkajt"
      },
      this.state.currentUser
    ) //Post User to DB and Clear States
      .then(() => {
        // Reload
        console.log("CHECK MONGO");
      });
    // API.insertUser({

    // create_teaminsert: "",
    // })
  }
  getAllTeams() {
    API.getTeamUsers().then(result => {
      var dataArr = [];
      result.data.forEach(team => {
        dataArr.push(team);
      });
      this.setState({ data: dataArr });
      console.log(this.state);
    });
  }

  componentDidMount() {
    this.getAllTeams();
    // this.getData();
  }
  render() {
    return (
      <MainPanel>
        <MainNav />
        <TeamList>
          {this.state.data.map(team => (
            <TeamName
              teamName={team.teamName}
              key={team._id}
              id={team._id}
              // users={team.users}
              // onClick=()
              onClick={() => this.onTeamClick(team.users)}
            />
          ))}
        </TeamList>
        <MainTeamUsers>
          {this.state.teamUsers.map(user => (
            <li
              key={user._id}
              onClick={() => this.onUserClick(user.plans, user._id)}
            >
              {user.fName}
            </li>
          ))}
        </MainTeamUsers>
      </MainPanel>
    );
  }
}

export default Teams;
