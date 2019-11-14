import React, { Component } from "react";
import API from "../../../../utils/API";

class UpdateUser extends Component {
  state = {
    userData: []
  };

  getUser = id => {
    API.getUser(id).then(res => {
      console.log(res);
      this.setState({ userData: res.data[0] });
    });
  };

  componentDidMount() {
    this.getUser(this.props.id);
  }

  render() {
    return (
      <div>
        {/* https://hackernoon.com/create-react-modal-using-reactjs-popup-m24m231v1 */}
        <h1>
          {this.state.userData.fName} {this.state.userData.lName}
        </h1>
        <hr />
        {/* UID ID USER_TYPE */}
        <div className="popupcontent">
          {/* UID ID USER-TYPE*/}

          <div className="poplabel">
            <p>
              UID: <span className="popData">{this.state.userData._id}</span>
            </p>
          </div>
          <div className="poplabel">
            <p>email:</p>
            <input
              className="popInput"
              name="email"
              defaultValue={this.state.userData.email}
              placeholder="email missing?"
            ></input>
          </div>
          <p> User Type: </p>
          <select
            className="popDropDown"
            name="userType"
            // onChange="placeholder handleinputchange"
            // value={this.state.userData.userType}
          >
            <option value="0">Base (0)</option>
            <option value="1">Supervisor (1)</option>
            <option value="2">Manager (2)</option>
            <option value="3">Admin (3)</option>
          </select>
        </div>

        {/* Team Stuff FOR LATER */}

        {/* <div className="poplabel">
          <p>Team:</p>
          <select
            className="popDropDown"
            name="userType"
            // onChange="placeholder handleinputchange"
            defaultValue={this.state.userData.teamID}
          >
            <option value="0">Example Team</option>
            <option value="1">Example Team 2</option>
            <option value="2">Example Team 3</option>
            <option value="3">Example Team 4</option>
          </select>
        </div> */}
        {/* submit */}
        <button
          id="placeholder id"
          // onClick="placeholder update"
        >
          Save
        </button>
      </div>
    );
  }
}

export default UpdateUser;
