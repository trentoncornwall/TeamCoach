import React from "react";
import "./style.css";

const UserPlans = props => {
  return (
    <div className="UserPlans">
      {/* Going to put create a plan here */}
      <ul className="planList">
        {props.user ? (
          <div className="createPlan">
            <p>Create New Plan:</p>
            <input></input>
          </div>
        ) : null}
        {props.data.map(plan => (
          <li key={plan._id} className="planItem">
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
