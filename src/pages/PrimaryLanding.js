// External libraries
import React from "react";
import { Divider, Header, Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

// Components
import Slider from "../components/Slider";

// Styles
import "./styles/PrimaryLanding.css";

/* 
  The main landing page:
    where all current user's units are listed  
*/
export default function PrimaryLanding() {
  return (
    <div id="primary-landing">
      <Divider horizontal>
        <Header as="h2">
          <img src="/images/icons8-home-100.png" alt="" />
          Units
        </Header>
      </Divider>
      <Slider />

      <Divider horizontal>
        <Header as="h2">
          <img src="/images/icons8-building-100.png" alt="" />
          Buildings
        </Header>
      </Divider>
      <Slider />

      <Divider horizontal>
        <Header as="h2">
          <img src="/images/icons8-city-100.png" alt="" />
          Neighborhoods
        </Header>
      </Divider>
      <Slider />

      <Button as={Link} to="/new-location" icon labelPosition="left" primary>
        Add New Location
        <Icon name="plus" />
      </Button>
    </div>
  );
}
