import React, { Component } from "react";
import PlanPanel from "../components/Plan/PlanPanel";
import PlanNav from "../components/Plan/PlanNav";
import SimpleContainer from "../components/Plan/SimpleContainer";
import Week from "../components/Plan/Week";
import AddWeek from "../components/Plan/Week/Add";
import API from "../utils/API";

class Plans extends Component {
  state = {
    User: {},
    Nav: { name: "", startDate: "", endDate: "" },
    FocusArea: { name: "Focus Area", data: "" },
    RootCause: { name: "Root Cause", data: "" },
    //! Ever new weeks object that is added will create a new week on the plan
    // When we build out plans API calls, we'll have to do a count on the current of weeks so we can set week number
    Weeks: []
  };

  handlePlanCreate = event => {};

  getData = () => {
    API.getPlan(this.props.match.params.id)
      .then(res => {
        console.log(res.data[0]);
        let newWeeks = res.data[0].Weeks;
        API.getUser(res.data[0].ownerID)
          .then(data => {
            console.log(data.data[0]);
            this.setState({
              User: data.data[0],
              Nav: { name: data.data[0].fName + " " + data.data[0].lName },
              Weeks: newWeeks
            });
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };

  handleWeekUpdate = () => {
    console.log(this.state.Weeks);
    console.log("New week added");
    API.updatePlan(
      {
        // FocusArea: this.FocusArea.data,
        // RootCause: this.RootCause.data,
        Weeks: this.state.Weeks
      },
      this.props.match.params.id
    );
  };

  handleNewWeek = () => {
    console.log("new week added");
    const newWeek = this.state.Weeks.concat({
      weekNumber: this.state.Weeks.length,
      planning: "",
      coach: "",
      employee: "",
      results: ""
    });
    this.setState({ Weeks: newWeek });
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    // useless until updated
  };

  handleWeekChange = event => {
    console.log(event.target.attributes.week.value);
    const name = event.target.name;
    const value = event.target.value;
    const weekIndex = event.target.attributes.week.value;
    this.setState(prevState => {
      const Weeks = [...prevState.Weeks];
      Weeks[weekIndex] = { ...Weeks[weekIndex], [name]: value };
      return { Weeks };
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <PlanPanel>
        <PlanNav navState={this.state.Nav} />
        <SimpleContainer focusArea={this.state.FocusArea} />
        <SimpleContainer focusArea={this.state.RootCause} />
        {this.state.Weeks.map(week => (
          <Week
            key={week.weekNumber}
            week={week}
            onChange={this.handleWeekChange}
          />
        ))}
        <AddWeek onClick={this.handleNewWeek} save={this.handleWeekUpdate} />
      </PlanPanel>
    );
  }
}

export default Plans;
