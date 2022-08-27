import React, { Component } from "react";

class WhatIsOutput extends Component {
  constructor() {
    super();
    this.state = { name: "Don Qixote" };
  }
  render() {
    return <div>{this.state.name}</div>;
  }
}

export default WhatIsOutput;
