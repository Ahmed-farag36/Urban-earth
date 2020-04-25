import React from "react";
import { Link } from "react-router-dom";
import { Icon, Card } from "semantic-ui-react";

import "./styles/Slider.css";

export default () => (
  <div className="slider">
    <Icon name="chevron left" size="large" />
    <Card.Group centered items={homes} as={Link} to="/secondary" />
    <Icon name="chevron right" size="large" />
  </div>
);

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
