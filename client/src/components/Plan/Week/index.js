import React from "react";
import "./style.css";

const index = props => {
  return (
    <div className="week">
      <div className="weekNav">
        <span>Week {props.week.weekNumber + 1}</span>
      </div>
      <div className="weekDataContainer">
        <div className="weekPlanning">
          <span className="weekSubText">
            Planning
            <br />
            <textarea
              class="week-text-area"
              name="planning"
              week={props.week.weekNumber}
              value={props.week.planning}
              onChange={props.onChange}
            />
          </span>
        </div>
        <div className="weekCoaching">
          <span className="weekSubText">
            Coach Commitment
            <br />
            <textarea
              class="week-text-area"
              name="coach"
              week={props.week.weekNumber}
              value={props.week.coach}
              onChange={props.onChange}
            />
          </span>
        </div>
        <div className="weekEmployee">
          <span className="weekSubText">
            Employee Commitment
            <br />
            <textarea
              class="week-text-area"
              name="employee"
              week={props.week.weekNumber}
              value={props.week.employee}
              onChange={props.onChange}
            />
          </span>
        </div>
        <div className="weekResult">
          <span className="weekSubText">
            Results
            <br />
            <textarea
              class="week-text-area"
              name="results"
              week={props.week.weekNumber}
              value={props.week.results}
              onChange={props.onChange}
            />
          </span>
        </div>
      </div>
      {/* <button className="saveBTN" onClick={this.handleSubmit}>
          SAVE
        </button> */}
    </div>
  );
};

export default index;
