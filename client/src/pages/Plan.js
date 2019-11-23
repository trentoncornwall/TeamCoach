import React, { Component } from "react";
import PlanPanel from "../components/Plan/PlanPanel";
import PlanNav from "../components/Plan/PlanNav";
import SimpleContainer from "../components/Plan/SimpleContainer";
import Week from "../components/Plan/Week";
import AddWeek from "../components/Plan/Week/Add";
import API from "../utils/API";

class Plans extends Component {
  state = {
    status: false,
    User: {},
    Nav: { name: "", startDate: "", endDate: "" },
    FocusArea: "",
    RootCause: "",
    //! Ever new weeks object that is added will create a new week on the plan
    // When we build out plans API calls, we'll have to do a count on the current of weeks so we can set week number
    Weeks: []
  };

  handlePlanCreate = event => {};

  getData = () => {
    API.getPlan(this.props.match.params.id)
      .then(res => {
        console.log(res.data[0]);
        // let newWeeks = res.data[0].Weeks;
        API.getUser(res.data[0].ownerID)
          .then(data => {
            var newFocusArea = "";
            var newRootCause = "";
            if (res.data[0].focusArea) {
              newFocusArea = res.data[0].focusArea;
            }
            if (res.data[0].rootCause) {
              newRootCause = res.data[0].rootCause;
            }
            this.setState({
              User: data.data[0],
              Nav: { name: data.data[0].fName + " " + data.data[0].lName },
              FocusArea: newFocusArea,
              RootCause: newRootCause,
              Weeks: res.data[0].Weeks
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
        focusArea: this.state.FocusArea,
        rootCause: this.state.RootCause,
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

    this.setState({ [name]: value });
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
    API.checkCurrent().then(data => {
      if (data.data) {
        this.setState({ status: true }, () => {
          this.getData();
        });
      } else {
        window.location = "/";
      }
    });
  }

  render() {
    if (this.state.status) {
      return (
        <PlanPanel>
          <PlanNav navState={this.state.Nav} />
          <SimpleContainer
            areaName={"Focus Area"}
            name={"FocusArea"}
            state={this.state.FocusArea}
            onChange={this.handleInputChange}
          />
          <SimpleContainer
            areaName={"Root Cause"}
            name={"RootCause"}
            state={this.state.RootCause}
            onChange={this.handleInputChange}
          />
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
    } else {
      return <div>Failed to Login</div>;
    }
  }
}

export default Plans;
