import React, { Component } from "react";
import PlanPanel from "../components/Plan/PlanPanel";
import PlanNav from "../components/Plan/PlanNav";
import SimpleContainer from "../components/Plan/SimpleContainer";
import Week from "../components/Plan/Week";
import API from "../utils/API";

class Plans extends Component {
  state = {
    Nav: { name: "Trenton Cornwall", startDate: "11/2019", endDate: "11/2019" },
    FocusArea: { name: "Focus Area", data: "" },
    RootCause: { name: "Root Cause", data: "" },
    //! Ever new weeks object that is added will create a new week on the plan
    // When we build out plans API calls, we'll have to do a count on the current of weeks so we can set week number
    Weeks: [
      {
        weekNumber: 1,
        id: "asdfasasdf",
        planning: "",
        coach: "",
        result: ""
      },
      { weekNumber: 2, id: "asdsdfasd", planning: "", coach: "", result: "" },
      { weekNumber: 3, id: "asdsdfasd", planning: "", coach: "", result: "" }
    ]
  };

  handlePlanCreate = event => {};

  getData = () => {
    API.getPlan(this.props.match.params.id).then(res => {
      console.log(res.data[0]);
    });
  };

  componentDidMount() {
    this.getData();
    // console.log(this.props.match.params.id);
  }

  render() {
    return (
      <PlanPanel>
        <PlanNav navState={this.state.Nav} />
        <SimpleContainer focusArea={this.state.FocusArea} />
        <SimpleContainer focusArea={this.state.RootCause} />
        {this.state.Weeks.map(week => (
          <Week key={week.id} id={week.id} week={week} />
        ))}
      </PlanPanel>
    );
  }
}

export default Plans;
