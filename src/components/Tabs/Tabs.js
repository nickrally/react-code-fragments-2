import React, { useState } from "react";
import WhatIsOutput from "../../pages/q1-what-is-output/WhatIsOutput";
import DiffWaysToColor from "../../pages/q2-diff-ways-apply-color/DiffWaysToColor";
import Blank from "../../pages/blank/Blank";
import "./Tabs.css";

const Tabs = () => {
  const [activeTag, setActiveTab] = useState("Blank");
  const pages = ["What Is Output", "Diff Ways To Color", "Blank"];

  const handleClick = (page) => {
    setActiveTab(page);
  };

  const renderContent = () => {
    switch (activeTag) {
      case "What Is Output":
        return <WhatIsOutput />;
      case "Diff Ways To Color":
        return <DiffWaysToColor />;
      default:
        return <Blank />;
    }
  };

  return (
    <>
      <div className="tabs">
        <ul className="navigation">
          {pages.map((page) => (
            <li key={page} onClick={() => handleClick(page)}>
              {page}
            </li>
          ))}
        </ul>
      </div>
      <div className="content">{renderContent()}</div>
    </>
  );
};

export default Tabs;
