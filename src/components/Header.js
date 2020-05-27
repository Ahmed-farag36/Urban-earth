// External libraries
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Styles
import "./styles/Header.css";

/*
  Header for all app's pages
*/
export default function Header() {
  const [selectedTab, setSelectedTab] = useState("globe");

  return (
    <header>
      <ul>
        <Link to="/">
          <li
            className={selectedTab === "globe" ? "active" : ""}
            onClick={() => setSelectedTab("globe")}
          >
            <img src="/images/icons8-globe-earth-100.png" alt="" />
          </li>
        </Link>
        <Link to="/discussion">
          <li
            className={selectedTab === "chat" ? "active" : ""}
            onClick={() => setSelectedTab("chat")}
          >
            <img src="/images/icons8-chat-100.png" alt="" />
          </li>
        </Link>
        <Link to="/empty">
          <li
            className={selectedTab === "money" ? "active" : ""}
            onClick={() => setSelectedTab("money")}
          >
            <img src="/images/icons8-money-100.png" alt="" />
          </li>
        </Link>
        <Link to="/library">
          <li
            className={selectedTab === "idea" ? "active" : ""}
            onClick={() => setSelectedTab("idea")}
          >
            <img src="/images/icons8-idea-100.png" alt="" />
          </li>
        </Link>
        <Link to="/empty">
          <li
            className={selectedTab === "settings" ? "active" : ""}
            onClick={() => setSelectedTab("settings")}
          >
            <img src="/images/icons8-settings-100.png" alt="" />
          </li>
        </Link>
      </ul>
    </header>
  );
}
