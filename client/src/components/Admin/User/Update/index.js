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

  refresh = () => {
    const userInfo = this.state._id;
    this.setState({
      teamData: [],
      userType: "",
      _id: "",
      fName: "",
      lName: "",
      email: "",
      teamID: ""
    });
    this.getUserInfo(userInfo);
    this.loadTeams();
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

  handleSubmit = event => {
    event.preventDefault();
    const data = {
      fName: this.state.fName,
      lName: this.state.lName,
      email: this.state.email,
      userType: this.state.userType,
      teamID: this.state.teamID
    };
    const id = this.state._id;

    API.putUser(data, id)
      .then(() => this.refresh())
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getUserInfo(this.props.id);
    this.loadTeams();
  }
  render() {
    return (
      <div className="UpdateUserContainer">
        <form className="UpdateUserForm">
          <fieldset>
            {/* https://hackernoon.com/create-react-modal-using-reactjs-popup-m24m231v1 */}
            <legend className="UserName">
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
                <label className="PopUpLabel">First Name:</label>
                <input
                  className="popInput"
                  name="fName"
                  defaultValue={this.state.fName}
                  placeholder="first name missing?"
                  onChange={this.handleInputChange}
                ></input>
              </li>
              <li>
                <label className="PopUpLabel">Last Name:</label>
                <input
                  className="popInput"
                  name="lName"
                  defaultValue={this.state.lName}
                  placeholder="first name missing?"
                  onChange={this.handleInputChange}
                ></input>
              </li>
              <li>
                <label className="PopUpLabel">Email: </label>
                <input
                  className="popInput"
                  name="email"
                  defaultValue={this.state.email}
                  placeholder="email missing?"
                  onChange={this.handleInputChange}
                ></input>
              </li>
              <li>
                <label className="PopUpLabel">User Type:</label>
                <select
                  className="popDropDown"
                  name="userType"
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
                  name="teamID"
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
            <button id="Update" onClick={this.handleSubmit}>
              Update
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default UpdateUser;
