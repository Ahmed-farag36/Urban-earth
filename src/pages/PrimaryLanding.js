import React from "react";
import { Divider, Header, Icon, Button, Image } from "semantic-ui-react";

// COMPONENTS
import Slider from "../components/Slider";

// STYLES
import "./styles/PrimaryLanding.css";

export default () => (
  <div id="primary-landing">
    <Divider horizontal>
      <Header as="h2">
        <Image src="/images/icons8-home-100.png" alt="" size="small" spaced />
        Units
      </Header>
    </Divider>
    <Slider />

    <Divider horizontal>
      <Header as="h2">
        <Image
          src="/images/icons8-building-100.png"
          alt=""
          size="small"
          spaced
        />
        Buildings
      </Header>
    </Divider>
    <Slider />

    <Divider horizontal>
      <Header as="h2">
        <Image src="/images/icons8-city-100.png" alt="" size="small" spaced />
        Neighborhoods
      </Header>
    </Divider>
    <Slider />

    <Button icon labelPosition="left" primary>
      Add New Location
      <Icon name="plus" />
    </Button>
  </div>
);
