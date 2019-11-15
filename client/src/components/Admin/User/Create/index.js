import React from "react";

function UserCreate(props) {
  return (
    <div>
      <form>
        First Name: <br />
        <input
          type="text"
          name="create_firstName"
          onChange={props.HIC}
          value={props.state.create_firstName}
        />
        <br />
        Last Name: <br />
        <input
          type="text"
          name="create_lastName"
          onChange={props.HIC}
          value={props.state.create_lastName}
        />
        <br />
        Email: <br />
        <input
          type="text"
          name="create_email"
          onChange={props.HIC}
          value={props.state.create_email}
        />
        <br />
        Password: <br />
        <input
          type="password"
          name="create_password"
          onChange={props.HIC}
          value={props.state.create_password}
        />
        <br />
        <select
          name="create_userType"
          onChange={props.HIC}
          value={props.state.create_userType}
        >
          <option value="0">Base (0)</option>
          <option value="1">Supervisor (1)</option>
          <option value="2">Manager (2)</option>
          <option value="3">Admin (3)</option>
        </select>
        <select
          value={props.state.create_teamID}
          name="create_teamID"
          onChange={props.HIC}
        >
          <option value="" selected>
            Select Team
          </option>
          {props.state.teamData.map(team => (
            <option value={team._id}>{team.teamName}</option>
          ))}
        </select>
        <input type="submit" value="Submit" onClick={props.HS} />
      </form>
    </div>
  );
}

export default UserCreate;
