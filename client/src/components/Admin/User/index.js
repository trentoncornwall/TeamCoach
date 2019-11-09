import React from "react";
// import "./style.css";

function User(props) {
  return (
    <p id={props.id} type={props.type} key={props.id} team={props.team}>
      {props.fullName}
    </p>
  );
}
export default User;
