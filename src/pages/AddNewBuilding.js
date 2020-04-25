import React from "react";
import { Form, Header, Button, Icon, FormGroup } from "semantic-ui-react";

// STYLES
import "./styles/AddNewBuilding.css";

export default () => {
  const owner = true; // TEMP

  return (
    <Form style={{ width: "50vw", margin: "0 auto" }}>
      <Header as="h2" content="Add New Building" />
      <Header as="h3" content="Address" />
      <Form.Group>
        <Form.Input placeholder="Country" width="5" />
        <Form.Input placeholder="State / Region" width="6" />
        <Form.Input placeholder="City" width="5" />
      </Form.Group>
      <FormGroup>
        <Form.Input placeholder="District / Division" width="6" />
        <Form.Input placeholder="Street" width="10" />
      </FormGroup>
      <Form.Input placeholder="Building No." width="5" />
      {/*<Button
          icon="world"
          labelPosition="left"
          label="Or Pick Location"
          color="teal"
        /> */}

      <Header as="h3" content="Location Details" />
      <Form.Group widths="equal">
        <Form.Input
          placeholder="eg. Alaaela groceray store building"
          label="Give it a public name or description"
        />
        <Form.Select
          label="Describe building"
          placeholder="Type"
          options={[
            {
              key: "ap",
              text: "Apartments Building",
              value: "Apartments Building"
            },
            { key: "d", text: "Detached Duplex", value: "Detached Duplex" },
            {
              key: "at",
              text: "Attached Duplex / Home",
              value: "Attached Duplex / Home"
            },
            { key: "m", text: "Movable Home", value: "Movable Home" }
          ]}
        />
        <Form.Input placeholder="Total Units" required />
        <Form.Input
          placeholder="Total Floors"
          label="Give it a public name or description"
          required
        />
        <Form.Radio label="Check if this building is an enclosed Residential compound" />
        <Form.Select
          label="Your Status"
          placeholder="Your status"
          required
          options={[
            "Resident Owner",
            "Non-resident Owner",
            "Tenant",
            "Resident Relative"
          ]}
        />
        <Form.Input placeholder="Apartment No." required />
        <Form.Input placeholder="Floor" required />
        {owner && <Form.Radio label="Allow others to make details changes" />}
        <Form.Input
          label="Give this location a unique name to you"
          placeholder="eg. My house"
        />
      </Form.Group>
    </Form>
  );
};
