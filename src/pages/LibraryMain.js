// External libraries
import React from "react";
import { Menu, Input, Dropdown, Button } from "semantic-ui-react";

// Components
import FunctionsCard from "../components/FunctionsCard";
import CustomDropdownItem from "../components/CustomDropdownItem";
import * as icons from "../components/Icons";

// Styles
import "./styles/LibraryMain.css";

// Global variables
const urbanFunctions = [
  "Energy",
  "Water",
  "Thermal",
  "Waste",
  "Green_Spaces",
  "Social",
  "Automation",
  "Maintenance",
  "Recycling",
  "Walkability",
  "HVAC",
  "Cleanness",
  "Other"
];

/* 
  The page where all urban functions are listed
*/
export default function LibraryMain() {
  const handleSearchChange = (e, data) => {
    console.log(data);
  };

  const mappedUrbanFunctions = urbanFunctions.map((funcTitle, i) => ({
    key: i,
    text: funcTitle,
    value: funcTitle,
    content: <CustomDropdownItem icon={icons[funcTitle]} text={funcTitle} />
  }));

  return (
    <div id="library-main">
      <Menu stackable>
        <Menu.Item>
          <Input icon="search" placeholder="Search by function name" />
        </Menu.Item>
        <Dropdown
          placeholder="Urban Functions"
          multiple
          search
          selection
          clearable
          options={mappedUrbanFunctions}
          onChange={handleSearchChange}
        />
        <Menu.Item>
          <Button content="My Cards" primary />
        </Menu.Item>
      </Menu>
      <section>
        <FunctionsCard />
        <FunctionsCard />
        <FunctionsCard />
      </section>
    </div>
  );
}
