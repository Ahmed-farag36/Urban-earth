// External libraries
import React, { useState } from "react";
import { Menu } from "semantic-ui-react";

// Components
import SubMenu from "./SubMenu";
import FunctionsCard from "./FunctionsCard";

// Styles
import "./styles/ManagerTools.css";

/*
  Switch between manager tools views and render secondary menu
*/
export default function ManagerTools() {
  const [view, setView] = useState("admin");

  const chooseView = () => {
    if (view === "tasks-list") {
      return (
        <div id="tasks-list">
          <FunctionsCard listed />
        </div>
      );
    } else {
      return <h1>{view}</h1>;
    }
  };
  return (
    <div id="manager-tools">
      <SubMenu />
      {chooseView()}
      <Menu fixed="bottom" compact>
        <Menu.Item active={view === "admin"} onClick={() => setView("admin")}>
          Admin
        </Menu.Item>
        <Menu.Item active={view === "budget"} onClick={() => setView("budget")}>
          Budget
        </Menu.Item>
        <Menu.Item
          active={view === "tasks-list"}
          onClick={() => setView("tasks-list")}
        >
          Tasks List
        </Menu.Item>
      </Menu>
    </div>
  );
}
