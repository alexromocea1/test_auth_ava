import React, { Component } from "react";
import "./Home.css";
import { authContext } from "../functions/auth";

class DropDown extends Component {
  constructor(props) {
    super(props);
  }

  handleChange(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <li className={this.props.value}>
        <input
          className="QuestionInput"
          name={"question" + this.props.value}
          placeholder="Write your question here"
        />
        <select
          className="dropdownlist"
          onChange={this.handleChange.bind(this)}
        >
          <option value="1">textArea</option>
          <option value="2">radio</option>
          <option value="3">checkbox</option>
        </select>
      </li>
    );
  }
}

class SecondInput extends Component {
  handleClick(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <li>
        <input className="optionsInput" placeholder="Write your options here" />
        <select
          className="dropDownSecondList"
          onChange={this.handleClick.bind(this)}
        >
          <option value="11">option1</option>
          <option value="12">option2</option>
          <option value="13">option3</option>
          <option value="14">option4</option>
          <option value="15">option5</option>
        </select>
      </li>
    );
  }
}

//SAVE THE QUESTION BUTTON :
// Look if the value of the questionInput is 1 : textArea
//                                           2 : radio
//                                           3 : checkbox
// For each (1/2/3) save the number of options with the type selected

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: [],
      nbQuestion: 0
    };
  }

  addQuestion() {
    const form = this.state.form.slice();

    form.push(<DropDown value={this.state.nbQuestion + 1} />);
    this.setState({ form: form, nbQuestion: this.state.nbQuestion + 1 });
  }
  addOptions() {
    const form = this.state.form.slice();

    form.push(<SecondInput value={this.state.nbQuestion + 1} />);
    this.setState({ form: form, nbQuestion: this.state.nbQuestion + 1 });
  }
  render() {
    //console.log(authContext._user.profile.roles);

    const form = this.state.form;
    console.log(form);

    return (
      <div className="Home">
        <div className="lander">
          <h1>SURVEY</h1>
          {authContext._user.profile.roles[0] === "SurveyAdmin" ? (
            <div>
              <ol>{form}</ol>
              <button onClick={() => this.addQuestion()}>
                1) Add question
              </button>
              <button
                class="btn btn-outline-secondary dropdown-toggle"
                className="buttonAddOptions"
                onClick={() => this.addOptions()}
              >
                2) Add options
              </button>
              <button className="SaveTheQuestion">3) Save the question</button>
            </div>
          ) : (
            <div>User</div>
          )}
        </div>
      </div>
    );
  }
}
