// External libraries
import React from "react";
import { Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

// Components
import { Idea, IdeaColored, Chart, Chat3, Gauge, GaugeColored } from "./Icons";

// Styles
import "./styles/SubMenu.css";

/*
  Display the secondary navigation menu for each unit
*/
export default function SubMenu({ activePanel }) {
  return (
    <div id="sub-menu">
      <Link to="/">
        <Header as="h2" content="Unit title" subheader="category" />
      </Link>
      <div className="icons">
        <Link to="/empty">
          {activePanel === "control" ? <GaugeColored /> : <Gauge />}
        </Link>
        <Link to="/unitId/discussion">
          <Chat3 />
        </Link>
        <Link to="/unitId/manager">
          <Chart />
        </Link>
        <Link to="/library/register">
          {activePanel === "libraryRegister" ? <IdeaColored /> : <Idea />}
        </Link>
      </div>
    </div>
  );
}
