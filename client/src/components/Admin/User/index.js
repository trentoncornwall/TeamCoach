import React from "react";
import Popup from "reactjs-popup";
import "./style.css";

function User(props) {
  return (
    <div className="userRow">
      <p id={props.id} type={props.type} key={props.id} team={props.team}>
        {props.fullName}
      </p>
      <button
        className="userButton delete"
        id={props.id}
        onClick={props.delete}
      >
        Delete
      </button>

      <Popup
        className="popup"
        modal
        trigger={<button className="userButton update modal">Update</button>}
      >
        {/* https://hackernoon.com/create-react-modal-using-reactjs-popup-m24m231v1 */}
        <h1>{props.fullName}</h1>
        <hr />
        <div className="popupcontent">
          <div className="poplabel">
            <p>
              ID: <span className="popData">{props.id} </span>
            </p>
          </div>
          <div className="poplabel">
            <p>email:</p>
            <input
              className="popInput"
              name="email"
              value={props.email}
              placeholder={props.email}
            ></input>
          </div>
          <p> User Type: </p>
          <select
            className="popDropDown"
            name="userType"
            onChange={props.handleInputChange}
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
            onChange={props.handleInputChange}
          >
            <option value="0">Example Team</option>
            <option value="1">Example Team 2</option>
            <option value="2">Example Team 3</option>
            <option value="3">Example Team 4</option>
          </select>
        </div>

        <button>Save </button>
      </Popup>
    </div>
  );
}

export default User;
