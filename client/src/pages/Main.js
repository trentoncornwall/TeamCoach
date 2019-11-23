import React, { Component } from "react";
import MainPanel from "../components/MainPanel";
import MainNav from "../components/MainNav";
import API from "../utils/API";

class Main extends Component {
  state = {
    status: false
  };

  componentDidMount() {
    API.checkCurrent().then(data => {
      if (data.data) {
        this.setState({ status: true });
      } else {
        window.location = "/";
      }
    });
  }

  render() {
    if (this.state.status) {
      return (
        <MainPanel>
          <MainNav />
        </MainPanel>
      );
    } else {
      return <div>Failed to Login</div>;
    }
  }
}

export default Main;
