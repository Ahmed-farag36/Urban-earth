// External libraries
import React from "react";
import { Link } from "react-router-dom";
import { Icon, Card } from "semantic-ui-react";

// Styles
import "./styles/Slider.css";

// Temp Global Variables
const homes = [
  {
    header: "Building Title 1",
    description: "Building Description: brief information about the building",
    meta: "Building Location"
  },
  {
    header: "Building Title 2",
    description: "Building Description: brief information about the building",
    meta: "Building Location"
  }
];

/*
  Component responsible for displaying each unit's slider (for homes, buildings, neighborhoods) in primary landing page 
*/
export default function Slider() {
  return (
    <div className="slider">
      <Icon name="chevron left" size="large" />
      <Card.Group centered items={homes} as={Link} to="/secondary" />
      <Icon name="chevron right" size="large" />
    </div>
  );
}
