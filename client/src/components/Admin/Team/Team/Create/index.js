import React from "react";
import "./style.css";

const TeamCreate = props => {
  return (
    <div id="newTeamForm">
      <form>
        <fieldset>
          <legend>New Team: </legend>
          <ul>
            <li>
              <label>Team Name: </label>

              <input
                type="text"
                name="create_teamName"
                onChange={props.HIC}
                value={props.state.create_teamName}
              />
            </li>

            <input type="submit" value="Submit" onClick={props.HTS} />
          </ul>
        </fieldset>
      </form>
    </div>
  );
};

export default TeamCreate;
