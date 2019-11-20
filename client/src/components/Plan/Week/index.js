import React, { Component } from "react";
import "./style.css";

class Week extends Component {
  state = {
    index: 0,
    changePlanning: "",
    changeCoach: "",
    changeEmployee: "",
    changeResults: ""
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = this.state;
    console.log({ data });
  };

  componentDidMount() {
    this.setState({
      index: this.props.week.weekNumber,
      changePlanning: this.props.week.planning,
      changeCoach: this.props.week.coach,
      changeEmployee: this.props.week.employee,
      changeResults: this.props.week.results
    });
  }

  render() {
    return (
      <div className="week">
        <div className="weekNav">
          <span>Week {this.props.week.weekNumber + 1}</span>
        </div>
        <div className="weekDataContainer">
          <div className="weekPlanning">
            <span className="weekSubText">
              Planning:
              <input
                name="changePlanning"
                value={this.state.changePlanning}
                onChange={this.handleInputChange}
              />
            </span>
          </div>
          <div className="weekCoaching">
            <span className="weekSubText">
              Coach Commitment:
              <input
                name="changeCoach"
                value={this.state.changeCoach}
                onChange={this.handleInputChange}
              />
            </span>
          </div>
          <div className="weekEmployee">
            <span className="weekSubText">
              Employee Commitment:
              <input
                name="changeEmployee"
                value={this.state.changeEmployee}
                onChange={this.handleInputChange}
              />
            </span>
          </div>
          <div className="weekResult">
            <span className="weekSubText">
              Results:
              <input
                name="changeResults"
                value={this.state.changeResults}
                onChange={this.handleInputChange}
              />
            </span>
          </div>
        </div>
        <button className="saveBTN" onClick={this.handleSubmit}>
          SAVE
        </button>
      </div>
    );
  }
}

export default Week;
