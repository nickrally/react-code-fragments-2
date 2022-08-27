import React, { useState } from "react";
import WhatIsOutput from "../../pages/q1/WhatIsOutput";
import DiffWaysToColor from "../../pages/q2/DiffWaysToColor";
import Clock from "../../pages/q3/Clock";
import Blank from "../../pages/blank/Blank";
import "./Tabs.css";

const Tabs = () => {
  const [activeTag, setActiveTab] = useState("Blank");
  const pages = ["Q1", "Q2", "Q3", "Blank"];

  const handleClick = (page) => {
    setActiveTab(page);
  };

  const renderContent = () => {
    switch (activeTag) {
      case "Q1":
        return <WhatIsOutput />;
      case "Q2":
        return <DiffWaysToColor />;
      case "Q3":
        return <Clock />;
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
