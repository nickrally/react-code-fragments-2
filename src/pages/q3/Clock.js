import React, { Component } from "react";
import ErrorBoundary, { Fallback } from "./error-handling";

export default class GoodClock extends Component {
  constructor(props) {
    super();
    this.state = { time: new Date() };
  }
  render() {
    return (
      <>
        <ErrorBoundary Fallback={Fallback}>
          <div>
            <h1>{this.props.title}!</h1>
            <h2>{this.state.time}</h2>
          </div>
        </ErrorBoundary>
      </>
    );
  }
}
