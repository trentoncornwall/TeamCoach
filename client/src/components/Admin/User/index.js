import React from "react";
import Popup from "reactjs-popup";
import UpdateUser from "./Update";
import "./style.css";

function User(props) {
  return (
    <div className="userRow">
      <p className="userName " id={props.id}>
        {props.fullName} (Email: {props.email})
      </p>
      <div>
        <button
          className="userButton delete"
          id={props.id}
          onClick={props.delete}
        >
          Delete
        </button>
      </div>
      <div>
        <Popup
          className="popup"
          modal
          trigger={<button className="userButton update modal">Update</button>}
        >
          <UpdateUser id={props.id} />
        </Popup>
      </div>
    </div>
  );
}

export default User;
