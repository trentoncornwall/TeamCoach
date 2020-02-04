import React from "react";
import Popup from "reactjs-popup";
import UpdateTeam from "././Update";
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
            <td>
              <Popup
                className="popup"
                modal
                trigger={
                  <button className="userButton update modal">Update</button>
                }
              >
                <UpdateTeam id={team._id} />
              </Popup>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Team;
