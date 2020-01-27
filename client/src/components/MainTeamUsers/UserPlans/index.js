import React from "react";
import "./style.css";

const UserPlans = props => {
  return (
    <div className="UserPlans">
      <ul className="planList">
        {console.log(props.user)}
        {props.data.map(plan => (
          <li key={plan._id} className="planItem">
            <button
              key={plan._id}
              className="archive"
              onClick={() =>
                props.setArchived(plan._id, plan.archived, props.user)
              }
            >
              {plan.archived ? "Archived" : "Unarchived"}
            </button>
            <a href={"/plan/" + plan._id} className="planLink">
              {plan.subject}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPlans;
