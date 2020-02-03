import React from "react";
import "./style.css";

function Users(props) {
  return (
    <span
      className={props.active ? "UsersButtonActive" : "UsersButton"}
      onClick={props.onClick}
    >
      Users
    </span>
  );
}
export default Users;
