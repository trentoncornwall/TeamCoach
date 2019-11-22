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
    tempPlanId: [],
    subject: "",
    currentUser: "",
    currentUserFirst: "",
    currentUserLast:"",
    currentUserPlans: [],
    teamUsers: []
  };

  onTeamClick(users) {
    this.setState({
      teamUsers: users,
      subject: "",
      currentUser: "",
      tempPlanId: [],
      currentUserPlans: []
    });
  }

  createPlan = event => {
    event.preventDefault();
    let currentUser = this.state.currentUser;
    let newPlanSubject = this.state.subject;
    this.setState({ subject: "" }, () => {
      API.postPlan(
        {
          subject: newPlanSubject,
          ownerID: currentUser
        },
        currentUser
      )
        .then(success => {
          let newPlans = success.data.plans;
          //update with new user Plans
          this.onUserClick(newPlans, currentUser);
        })
        .catch(err => console.log(err));
    });
  };

  onUserClick(plans, userId) {
    let userPlans = [];
    API.getUser(userId).then(result => {
      let plans = result.data[0].plans;
      this.setState({ currentUser: userId, tempPlanId: plans, currentUserFirst: result.data[0].fName, currentUserLast: result.data[0].lName }, () =>
        plans.forEach(projectId =>
          API.getPlan(projectId).then(result => {
            userPlans.push(result.data[0]);
            if (userPlans.length === plans.length) {
              // displays all of the user's plans now
              this.displayPlans(userPlans);
            }
          })
        )
      );
    });
  }

  setArchived(planId, archive) {
    let newArchiveStatus;
    archive ? (newArchiveStatus = false) : (newArchiveStatus = true);
    console.log(archive, newArchiveStatus, planId);
    API.updatePlan({ archived: newArchiveStatus }, planId).then(sucess => {
      //update plans with new valued buttons
      this.onUserClick(this.state.tempPlanId, this.state.currentUser);
    });
  }

  displayPlans(plans) {
    this.setState({ currentUserPlans: plans });
  }

  getAllTeams() {
    API.getTeamUsers().then(result => {
      console.log(result);
      var dataArr = [];
      result.data.forEach(team => {
        dataArr.push(team);
      });
      //data is all teams and user info which includes user plans object ids
      this.setState({ data: dataArr });
    });
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    this.getAllTeams();
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
              onClick={() => this.onTeamClick(team.users)}
            />
          ))}
        </TeamList>
        <MainTeamUsers>
          {this.state.currentUser.length === 0 ? (
            this.state.teamUsers.map(user => (
              <li
                key={user._id}
                onClick={() => {
                  this.onUserClick(user.plans, user._id);
                }}
              >
                {user.fName}
              </li>
            ))
          ) : (
            <ul>
              <h3>{this.state.currentUserFirst} {this.state.currentUserLast}</h3>
              <form className="planForm">
                <input
                  className="NewPlanSubject"
                  name="subject"
                  value={this.state.subject}
                  onChange={this.handleInputChange}
                ></input>
                <button
                  className="NewPlanButton"
                  type="submit"
                  value="Submit"
                  onClick={this.createPlan}
                >
                  Create New Plan
                </button>
              </form>
              {this.state.currentUserPlans.map(plan => (
                <li key={plan._id}>
                  <a href={"/plan/" + plan._id}>{plan.subject}</a>
                  <button
                    key={plan._id}
                    onClick={() => this.setArchived(plan._id, plan.archived)}
                  >
                    {plan.archived ? "Archived" : "Unarchive"}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </MainTeamUsers>
      </MainPanel>
    );
  }
}

export default Teams;
