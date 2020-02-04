import React, { Component } from "react";
import API from "../../../../../utils/API";
import "./style.css";

class UpdateTeam extends Component {
  state = {
    teamID: "",
    teamName: ""
  };

  refresh = () => {
    const teamInfo = this.state._id;
    this.setState({
      teamID: "",
      teamName: ""
    });
    // reloads team
    // this.loadTeams();
  };

  getTeamInfo = id => {
    API.getOneTeam(id).then(res => {
      this.setState({
        teamID: res.data[0]._id,
        teamName: res.data[0].teamName
      });
    });
  };

  //!NEED TO DO Update team Info (new name)
  handleSubmit = event => {
    event.preventDefault();
    const data = {
      teamName: this.state.fName
    };
    const id = this.state.teamID;

    API.putUser(data, id)
      .then(() => this.refresh())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };
  componentDidMount() {
    this.getTeamInfo(this.props.id);
  }

  render() {
    return (
      <div className="UpdateTeamContainer">
        <form className="UpdateTeamForm">
          <fieldset>
            {/* https://hackernoon.com/create-react-modal-using-reactjs-popup-m24m231v1 */}
            <legend className="UserName">{this.state.teamName}</legend>
            <ul>
              <li>
                <label className="PopUpLabel">Team Id:</label>
                <span className="popData">{this.state.teamID}</span>
              </li>
              <li>
                <label className="PopUpLabel">Team Name:</label>
                <input
                  className="popInput"
                  name="teamName"
                  defaultValue={this.state.teamName}
                  placeholder="team name missing?"
                  onChange={this.handleInputChange}
                ></input>
              </li>
            </ul>
            {/* submit */}
            <button id="Update" onClick={this.handleSubmit}>
              Update
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default UpdateTeam;
