import React, { Component } from "react";
import API from "../../utils/API";
import "./index.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: {}
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/teams");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // Check required fields
    // if (!this.state.email || !this.state.password) {
    //   this.setState({ error: "Please fill out all fields" });
    // }
    // if (this.state.email === "admin") {
    //   window.location = "/admin";
    // } else if (this.state.email === "manager") {
    //   window.location = "/main";
    // }
    // API.checkLogin(
    //   {
    //     user: this.state.email,
    //     password: this.state.password
    //   },
    //   this.state.email
    // )
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(e => {
    //     console.log(e.response.data);
    //   });
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    return (
      <div>
        <h1 className="loginTitle">
          <img src="./images/logo.svg" alt="Logo" className="logo" /> Team
          <span className="companyName">Coach</span>
        </h1>
        <span className="loginError">{this.state.error}</span>
        <form>
          <p className="loginFieldTitle">User Name:</p>
          <input
            type="text"
            className="loginField"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          ></input>
          <p className="loginFieldTitle">Password:</p>
          <input
            type="password"
            className="loginField"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          ></input>
          <input
            type="submit"
            value="Login"
            className="loginSubmit"
            onClick={this.handleFormSubmit}
          ></input>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
