import React, { Component } from "react";
import API from "../../../../utils/API";
import "./style.css";

class UpdateUser extends Component {
  state = {
    teamData: [],
    userType: "",
    _id: "",
    fName: "",
    lName: "",
    email: "",
    teamID: ""
  };

  getUserInfo = id => {
    API.getUser(id).then(res => {
      this.setState({
        userType: res.data[0].userType,
        _id: res.data[0]._id,
        fName: res.data[0].fName,
        lName: res.data[0].lName,
        email: res.data[0].email,
        teamID: res.data[0].teamID
      });
    });
  };

  loadTeams = () => {
    API.allTeams()
      .then(data => {
        var dataArr = [];
        data.data.forEach(team => {
          dataArr.push({
            teamID: team._id,
            teamName: team.teamName
          });
        });
        this.setState({ teamData: dataArr });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    this.getUserInfo(this.props.id);
    this.loadTeams();
  }
  render() {
    return (
      <div className="UpdateUserForm">
        <form>
          <fieldset>
            {/* https://hackernoon.com/create-react-modal-using-reactjs-popup-m24m231v1 */}
            <legend className="UserNameUpdate">
              <strong>
                {this.state.fName} {this.state.lName}
              </strong>
            </legend>
            <ul>
              <li>
                <label className="PopUpLabel">User Id:</label>
                <span className="popData">{this.state._id}</span>
              </li>

              <li>
                <label className="PopUpLabel">Email: </label>
                <input
                  className="popInput"
                  name="updateEmail"
                  defaultValue={this.state.email}
                  placeholder="email missing?"
                  onChange={this.handleInputChange}
                ></input>
              </li>
              <li>
                <label className="PopUpLabel">User Type:</label>
                <select
                  className="popDropDown"
                  name="updateUserType"
                  onChange={this.handleInputChange}
                  value={this.state.userType}
                >
                  <option value="0">Base (0)</option>
                  <option value="1">Supervisor (1)</option>
                  <option value="2">Manager (2)</option>
                  <option value="3">Admin (3)</option>
                </select>
              </li>
              <li>
                <label className="PopUpLabel">Team:</label>
                <select
                  className="popDropDown"
                  name="updateTeamID"
                  key="teamSelect"
                  onChange={this.handleInputChange}
                  value={this.state.teamID}
                >
                  {this.state.teamData.map(team => (
                    <option value={team.teamID} key={team.teamID}>
                      {team.teamName}
                    </option>
                  ))}
                </select>
              </li>
            </ul>

            {/* submit */}
            <button
              id="placeholder id"
              // onClick="placeholder update"
            >
              Save
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default UpdateUser;
