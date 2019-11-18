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
    currentUser: "",
    currentUserPlans: [],
    teamUsers: []
  };

  onTeamClick(users) {
    // const usersArray = id;
    // console.log(users);
    this.setState({ teamUsers: users });
  }

  placeholderdosomethingwithplans = () => {
    console.log(`STATE UPDATED WITH PLANS AND STUFF NOW DO SOMETHING`);
    console.log(`CURRENT STATE:`);
    console.log(this.state);
  };

  checkPlans() {
    // console.log(`Checking User Plan Count`);
    // console.log(this.state.currentUserPlans);
    if (this.state.currentUserPlans.length === 0) {
      console.log(`Creating new plan`);
      API.postPlan(
        {
          focusArea: {
            uBehavior: "placeholder",
            dBehavior: "dplaceholder"
          },
          blahblah: "yes"
        },
        this.state.currentUser
      ) //Post User to DB and Clear States
        .then(data => {
          this.setState(
            {
              currentUser: data.data._id,
              currentUserPlans: data.data.plans
            },
            () => this.placeholderdosomethingwithplans() //CHANGE TO FUNCITON TO CALL
          );
        })
        .catch(err => console.log(err));
    } else {
      this.placeholderdosomethingwithplans(); //CHANGE TO FUNCTION TO CALL
    }
  }

  onUserClick(plans, userId) {
    // console.log(`Checking Plans`);
    // console.log(plans);
    // console.log("useid", userId);
    // console.log("Pre State");
    // console.log(this.state.currentUserPlans);
    this.setState({ currentUser: userId, currentUserPlans: plans }, () =>
      this.checkPlans()
    );
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
              onClick={() => {
                this.onUserClick(user.plans, user._id);
              }}
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
