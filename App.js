import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    };
  }

  async componentDidMount() {}

  handleLogin = async event => {
    this.setState({ isAuthenticated: true });
  };

  handleLogout = async event => {
    this.setState({ isAuthenticated: false });
  };

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated
    };

    return (
      !this.state.isAuthenticating && (
        <div className="App container">
          <Navbar fluid collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">Avanade - Micro Survey </Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Navbar>
          <Routes childProps={childProps} />
        </div>
      )
    );
  }
}

export default withRouter(App);
