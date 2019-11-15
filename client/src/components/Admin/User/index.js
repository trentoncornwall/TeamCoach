import React from "react";
import Popup from "reactjs-popup";
import UpdateUser from "./Update";
import "./style.css";

function User(props) {
  return (
    <div className="userRow">
      <p id={props.id}>
        {props.fullName} (Email: {props.email})
      </p>
      <button
        className="userButton delete"
        id={props.id}
        onClick={props.delete}
      >
        Delete
      </button>
      <Popup
        className="popup"
        modal
        trigger={<button className="userButton update modal">Update</button>}
      >
        <UpdateUser id={props.id} />
      </Popup>
    </div>
  );
}

export default User;
