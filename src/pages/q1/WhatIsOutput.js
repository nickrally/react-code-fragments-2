import React, { Component } from "react";

class WhatIsOutput extends Component {
  constructor() {
    super();
    this.state = { name: "peter" };
  }
  render() {
    return <div>{this.state.name}</div>;
  }
}

export default WhatIsOutput;
