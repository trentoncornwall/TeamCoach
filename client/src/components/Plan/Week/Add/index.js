import React from "react";

const AddWeek = props => {
  return (
    <div>
      <button onClick={props.onClick}>Add Week</button>{" "}
      <button onClick={props.save}>Save</button>
    </div>
  );
};

export default AddWeek;
