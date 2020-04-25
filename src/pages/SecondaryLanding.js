import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Image, Header } from "semantic-ui-react";

// STYLES
import "./styles/SecondaryLanding.css";

export default () => {
  const [selectedPanel, setSelectedPanel] = useState("");

  return (
    <div id="sub-menu">
      <Link to="/">
        <Header as="h2" content="Unit title" subheader="category" />
      </Link>
      <div className="icons">
        <Image
          src={`/images/icons8-speed-100${
            selectedPanel === "speed" ? "-2" : ""
          }.png`}
          alt=""
          onClick={() => setSelectedPanel("speed")}
        />
        <Image
          src={`/images/icons8-conference-100${
            selectedPanel === "conference" ? "-2" : ""
          }.png`}
          alt=""
          onClick={() => setSelectedPanel("conference")}
        />
        <Image
          src={`/images/icons8-combo-chart-100${
            selectedPanel === "combo-chart" ? "-2" : ""
          }.png`}
          alt=""
          onClick={() => setSelectedPanel("combo-chart")}
        />
        <Image
          src={`/images/icons8-idea-100${
            selectedPanel === "idea" ? "-2" : "-grey"
          }.png`}
          alt=""
          onClick={() => setSelectedPanel("idea")}
        />
      </div>
    </div>
  );
};
