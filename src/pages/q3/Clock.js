import React from "react";
import ErrorBoundary, { Fallback } from "./error-handling";

const Clock = () => {
  const badClockPath = "BadClock";
  const goodClockPath = "GoodClock";

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

  const setInit = () => {
    const initPath = `./${boolToPath(false)}`;
    const initPathBool = pathToBool(initPath.split("/")[1]);
    console.log(initPath, initPathBool);
    return initPath;
  };
  const [path, setPath] = React.useState(setInit);

  const toggleClock = () => {
    const goodOrBad = pathToBool(path.split("/")[1]);
    console.log("goodOrBad", goodOrBad);
    setPath(`./${boolToPath(!goodOrBad)}`);
  };

  const getComponent = () => {
    console.log("getComponent!");
    const Component = React.lazy(() => import(`${path}`));
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Component />
      </React.Suspense>
    );
  };

  return (
    <>
      <button onClick={toggleClock}>toggle clocks - one of them works</button>
      <ErrorBoundary key={path} Fallback={Fallback}>
        {getComponent()}
      </ErrorBoundary>
    </>
  );
};

export default Clock;
