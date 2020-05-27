// External libraries
import React from "react";

// Components
import SubMenu from "../components/SubMenu";

// Styles
import "./styles/SecondaryLanding.css";

/* 
  The page which appear after current user select a unit to manage
*/
export default function SecondaryLanding() {
  return (
    <div className="secondary">
      <SubMenu />
    </div>
  );
}
