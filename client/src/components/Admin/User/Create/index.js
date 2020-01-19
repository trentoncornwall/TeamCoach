import React from "react";
import "./style.css";

function UserCreate(props) {
  return (
    <div id="newUserForm">
      <form>
        <fieldset>
          <legend>New User:</legend>
          <ul>
            <li>
              <label>First Name: </label>
              <input
                type="text"
                name="create_firstName"
                onChange={props.HIC}
                value={props.state.create_firstName}
              />
            </li>
            <li>
              <label>Last Name: </label>
              <input
                type="text"
                name="create_lastName"
                onChange={props.HIC}
                value={props.state.create_lastName}
              />
            </li>
            <li>
              <label>Email: </label>
              <input
                type="text"
                name="create_email"
                onChange={props.HIC}
                value={props.state.create_email}
              />
            </li>
            <li>
              <label>Password: </label>
              <input
                type="password"
                name="create_password"
                onChange={props.HIC}
                value={props.state.create_password}
              />
            </li>
            <li>
              <label>Employee Type: </label>
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
            </li>
            <li>
              <label>Team: </label>

              <select
                value={props.state.create_teamID}
                name="create_teamID"
                onChange={props.HIC}
              >
                <option value="" defaultValue>
                  Select Team
                </option>
                {props.state.teamData.map(team => (
                  <option value={team._id} key={team._id}>
                    {team.teamName}
                  </option>
                ))}
              </select>
            </li>
            <input type="submit" value="Submit" onClick={props.HS} />
          </ul>
        </fieldset>
      </form>
    </div>
  );
}

export default UserCreate;
