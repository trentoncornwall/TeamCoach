import React from "react";
import "./style.css";

const UserList = props => {
  return (
    <div
      className={
        props.active ? "user-name-container-active" : "user-name-container"
      }
    >
      <p className="user-name" onClick={props.onClick}>
        {props.fName} {props.lName}
      </p>
    </div>
  );
};

export default UserList;
