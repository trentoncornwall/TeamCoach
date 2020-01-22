import React, { Component } from "react";
import MainPanel from "../components/MainPanel";
import MainNav from "../components/MainNav";
import TeamName from "../components/TeamName";
import TeamList from "../components/TeamList";
import API from "../utils/API";
import MainTeamUsers from "../components/MainTeamUsers";
class Teams extends Component {
  state = {
    status: false,
    data: [],
    tempPlanId: [],
    subject: "",
    currentUser: "",
    currentUserFirst: "",

    currentUserLast: "",
    currentTeam: "",
    currentUserPlans: [],
    teamUsers: []
  };

  onTeamClick(teamname, users) {
    this.setState({
      teamUsers: users,
      subject: "",
      currentUser: "",
      tempPlanId: [],
      currentUserPlans: [],
      currentTeam: teamname
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
      this.setState(
        {
          currentUser: userId,
          tempPlanId: plans,
          currentUserFirst: result.data[0].fName,
          currentUserLast: result.data[0].lName
        },
        () =>
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

  logout = () => {
    API.logOut().then(response => {
      window.location = "/";
    });
  };

  componentDidMount() {
    API.checkCurrent().then(data => {
      if (!data.data) {
        window.location = "/";
      } else {
        if (data.data.userType === 1 || 2 || 3) {
          console.log("setting status to true");
          this.setState({ status: true }, () => {
            this.getAllTeams();
          });
        }
      }
    });
  }

  render() {
    return (
      <MainPanel>
        <MainNav logout={() => this.logout()} />

        <TeamList>
          {this.state.data.map(team => (
            <TeamName
              teamName={team.teamName}
              key={team._id}
              id={team._id}
              onClick={() => this.onTeamClick(team.teamName, team.users)}
            />
          ))}
        </TeamList>
        <MainTeamUsers>
          <h2 className="currentTeamName"> {this.state.currentTeam}</h2>
          {this.state.currentUser.length === 0 ? (
            this.state.teamUsers.map(user => (
              <li
                key={user._id}
                onClick={() => {
                  this.onUserClick(user.plans, user._id);
                }}
              >
                {user.fName} {user.lName}
              </li>
            ))
          ) : (
            <ul>
              <h3 className="currentUserName">
                {this.state.currentUserFirst} {this.state.currentUserLast}
              </h3>
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
                <li key={plan._id} className="planItem">
                  <button
                    key={plan._id}
                    className="archive"
                    onClick={() => this.setArchived(plan._id, plan.archived)}
                  >
                    {plan.archived ? "Archived" : "Unarchive"}
                  </button>
                  <a href={"/plan/" + plan._id} className="planLink">
                    {plan.subject}
                  </a>
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
