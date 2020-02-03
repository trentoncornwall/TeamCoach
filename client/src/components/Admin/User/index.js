import React from "react";
import Popup from "reactjs-popup";
import UpdateUser from "./Update";
import "./style.css";

function User(props) {
  return (
    <table className="UserTable">
      <thead>
        <tr>
          <th>
            <strong>NAME</strong>
          </th>
          <th>
            <strong>E-MAIL</strong>
          </th>
          <th>
            <strong>TYPE</strong>
          </th>
          <th colSpan="2">
            <strong>ACTIONS</strong>
          </th>
        </tr>
      </thead>
      <tbody>
        {props.userData.map(user => (
          <tr id={user._id} key={user._id}>
            <td>{user.fName + " " + user.lName}</td>
            <td>{user.email}</td>
            {(() => {
              switch (user.userType) {
                case 0:
                  return <td>Base</td>;
                case 1:
                  return <td>Supervisor</td>;
                case 2:
                  return <td>Manager</td>;
                case 3:
                  return <td>Admin</td>;
                default:
                  return null;
              }
            })()}
            <td>
              {" "}
              <div className="modal">
                <Popup
                  className="popup"
                  modal
                  trigger={
                    <button className="userButton update modal">Update</button>
                  }
                >
                  <UpdateUser id={user._id} />
                </Popup>
              </div>
            </td>
            <td>
              <button
                className="userButton delete"
                id={user._id}
                onClick={props.delete}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default User;
