import React from "react";
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
      <button className="userButton update" onClick={props.update}>
        Update
      </button>
    </div>
  );
}
export default User;
