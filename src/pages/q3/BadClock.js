import React, { Component } from "react";
export default class BadClock extends Component {
  constructor(props) {
    super();
    this.state = { time: new Date() };
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}!</h1>
        <h2>{this.state.time}</h2>
      </div>
    );
  }
}
