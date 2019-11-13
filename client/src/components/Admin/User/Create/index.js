import React from "react";

function UserCreate(props) {
  return (
    <div>
      <form>
        First Name: <br />
        <input
          type="text"
          name="firstName"
          onChange={props.HIC}
          value={props.state.firstName}
        />
        <br />
        Last Name: <br />
        <input
          type="text"
          name="lastName"
          onChange={props.HIC}
          value={props.state.lastName}
        />
        <br />
        <select
          name="userType"
          onChange={props.HIC}
          value={props.state.userType}
        >
          <option value="0">Base (0)</option>
          <option value="1">Supervisor (1)</option>
          <option value="2">Manager (2)</option>
          <option value="3">Admin (3)</option>
        </select>{" "}
        <br />
        Email: <br />
        <input
          type="text"
          name="email"
          onChange={props.HIC}
          value={props.state.email}
        />
        <br />
        Password: <br />
        <input
          type="password"
          name="userPassword"
          onChange={props.HIC}
          value={props.state.userPassword}
        />
        <input type="submit" value="Submit" onClick={props.HS} />
      </form>
    </div>
  );
}

export default UserCreate;
