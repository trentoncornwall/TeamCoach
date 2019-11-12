import React from "react";
import Popup from "reactjs-popup";
import "./style.css";

function User(props) {
  return (
    <div className="userRow">
      <p id={props.id} type={props.type} key={props.id} team={props.team}>
        {props.fullName}
      </p>
      <button className="userButton delete" onClick={props.delete}>
        Delete
      </button>
      <Popup
        className="popup"
        modal
        trigger={<button className="userButton update modal">Update</button>}
      >
        <h1>{props.fullName}</h1>
        <hr />
        <br />
        <p> ID : {props.id} </p>
        <p> Email: {props.email} </p>
        <p> Team: {props.teamID} </p>
        <button>Save </button>
      </Popup>
    </div>
  );
}
export default User;
