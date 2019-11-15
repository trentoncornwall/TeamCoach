import React from "react";

const TeamCreate = props => {
  return (
    <div>
      <form>
        Team Name: <br />
        <input
          type="text"
          name="create_teamName"
          onChange={props.HIC}
          value={props.state.create_teamName}
        />
        <br />
        <input type="submit" value="Submit" onClick={props.HTS} />
      </form>
    </div>
  );
};

export default TeamCreate;
