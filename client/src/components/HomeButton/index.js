import React from "react";
import "./style.css";

function Home(props) {
  return (
    <button className="HomeButton" onClick={props.onClick}>
      Home
    </button>
  );
}
export default Home;
