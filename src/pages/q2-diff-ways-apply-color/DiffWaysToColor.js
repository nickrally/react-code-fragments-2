import React from "react";
import Dropdown from "../../common/dropdown/Dropdown";

const DiffWaysToColor = () => {
  const [path, setPath] = React.useState(null);

  const items = [
    { text: "div div {color: green}", value: "Green" },
    { text: "div > div {color: blue}", value: "Blue" },
    { text: "div + div + div {color: orange}", value: "Orange" },
    { text: "div > div > div {color: red}", value: "Red" },
  ];

  const getComponent = () => {
    const Component = React.lazy(() => import(`${path}`));
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Component />
      </React.Suspense>
    );
  };

  const toggleStyleSheets = (selectedValue) => {
    //console.log("event.currentTarget.value", selectedValue); //<-- e.g. Green
    const styleSheets = document.styleSheets;
    const numOfStyleSheets = styleSheets.length;
    for (let i = 0; i < numOfStyleSheets; i++) {
      //console.log(styleSheets[i].cssRules[0]?.cssText); // <-- e.g. div div { color: green; }
      if (
        styleSheets[i].cssRules &&
        styleSheets[i].cssRules[0] &&
        styleSheets[i].cssRules[0].cssText &&
        styleSheets[i].cssRules[0].cssText.includes("color")
      ) {
        if (
          styleSheets[i].cssRules[0].cssText.includes(
            selectedValue.toLowerCase()
          )
        ) {
          styleSheets[i].disabled = false;
        } else {
          styleSheets[i].disabled = true;
        }
      }
    }
  };

  const onChange = (event) => {
    toggleStyleSheets(event.currentTarget.value);
    setPath(`./${event.currentTarget.value}`);
  };

  return (
    <>
      <Dropdown items={items} onChange={onChange} />
      {path && getComponent()}
    </>
  );
};

export default DiffWaysToColor;
