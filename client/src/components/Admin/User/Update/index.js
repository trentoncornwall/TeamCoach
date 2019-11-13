import React, { Component } from "react";
import API from "../../../../utils/API";

class UpdateUser extends Component {
  state = {
    userData: []
  };

  componentDidMount() {
    console.log("Time to get a call for user data");
  }

  render() {
    return (
      <div>
        {/* https://hackernoon.com/create-react-modal-using-reactjs-popup-m24m231v1 */}
        <h1>"FullName"</h1>
        <hr />
        <div className="popupcontent">
          <div className="poplabel">
            <p>
              ID: <span className="popData">"ID" </span>
            </p>
          </div>
          <div className="poplabel">
            <p>email:</p>
            <input
              className="popInput"
              name="email"
              value="placeholder value"
              placeholder="placeholder email"
            ></input>
          </div>
          <p> User Type: </p>
          <select
            className="popDropDown"
            name="userType"
            onChange="placeholder handleinputchange"
          >
            <option value="0">Base (0)</option>
            <option value="1">Supervisor (1)</option>
            <option value="2">Manager (2)</option>
            <option value="3">Admin (3)</option>
          </select>
        </div>

        <div className="poplabel">
          <p>Team:</p>
          <select
            className="popDropDown"
            name="userType"
            onChange="placeholder handleinputchange"
          >
            <option value="0">Example Team</option>
            <option value="1">Example Team 2</option>
            <option value="2">Example Team 3</option>
            <option value="3">Example Team 4</option>
          </select>
        </div>

        <button id="placeholder id" onClick="placeholder update">
          Save
        </button>
      </div>
    );
  }
}

export default UpdateUser;
