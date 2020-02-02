import React from "react";
import "./style.css";

function Users(props) {
  return (
    <button
      className={props.active ? "UsersButtonActive" : "UsersButton"}
      onClick={props.onClick}
    >
      Users
    </button>
  );
}
export default Users;
