import React from "react";
import ErrorBoundary, { Fallback } from "./error-handling";

const Clock = () => {
  const badClockPath = "./BadClock";
  const goodClockPath = "./GoodClock";

  const pathToBool = (componentPath) => {
    switch (componentPath) {
      case goodClockPath:
        return true;
      case badClockPath:
        return false;
      default:
        return Boolean(componentPath);
    }
  };

  const boolToPath = (bool) => {
    switch (bool) {
      case true:
        return goodClockPath;
      case false:
        return badClockPath;
      default:
        return badClockPath;
    }
  };

  const badClockText = "This is a BadClock. Click to load GoodClock";
  const goodClockText = "This is a GoodClock. Click to break it.";

  const boolToButtonText = (bool) => (bool ? goodClockText : badClockText);

  const [path, setPath] = React.useState(() => boolToPath(false));
  const [btnText, setBtnTxt] = React.useState(badClockText);

  const toggleClock = () => {
    const goodOrBad = pathToBool(path);
    setPath(boolToPath(!goodOrBad));
    setBtnTxt(boolToButtonText(!goodOrBad));
  };

  const getComponent = () => {
    const Component = React.lazy(() => import(`${path}`));
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Component />
      </React.Suspense>
    );
  };

  return (
    <>
      <button onClick={toggleClock}>{btnText}</button>
      <ErrorBoundary key={path} Fallback={Fallback}>
        {getComponent()}
      </ErrorBoundary>
    </>
  );
};

export default Clock;
