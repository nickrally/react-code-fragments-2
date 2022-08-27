import React, { Component } from "react";

export const Fallback = ({ error }) => {
  return (
    <div role="alert">
      <pre style={{ whiteSpace: "normal", color: "red" }}>{error.message}</pre>
    </div>
  );
};

export default class ErrorBoundary extends Component {
  state = { baderror: null };
  static getDerivedStateFromError(err) {
    return { baderror: err };
  }
  render() {
    const { baderror } = this.state;
    if (baderror) {
      return <this.props.Fallback error={baderror} />;
    }
    return this.props.children;
  }
}
