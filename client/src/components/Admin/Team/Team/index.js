import React from "react";
import Popup from "reactjs-popup";
import "./style.css";

function Team(props) {
  return (
    <table className="TeamTable">
      {console.log(props)}
      <thead>
        <tr>
          <th>
            <strong>NAME</strong>
          </th>
          <th>
            <strong>MEMBERS</strong>
          </th>
          <th colSpan="2">
            <strong>ACTIONS</strong>
          </th>
        </tr>
      </thead>
      <tbody>
        {props.teamData.map(team => (
          <tr id={team._id} key={team._id}>
            <td>{team.teamName}</td>
            <td>{team.users.length}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Team;
