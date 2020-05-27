// External libraries
import React from "react";
import { Form, Header } from "semantic-ui-react";

// Styles
import "./styles/newLocation.css";

/*
  Step one of adding new location multi-step form
*/
export default function NewLocation({ input, handleChange, navigation }) {
  const { country, state, city, district, street, buildingNo } = input;
  const { next } = navigation;

  return (
    <>
      <Header as="h3" content="Address:" />
      <Form.Group>
        <Form.Input
          name="country"
          value={country}
          onChange={handleChange}
          placeholder="Country"
          required
          width="5"
        />
        <Form.Input
          name="state"
          value={state}
          onChange={handleChange}
          placeholder="State / Region"
          required
          width="6"
        />
        <Form.Input
          name="city"
          value={city}
          onChange={handleChange}
          placeholder="City"
          required
          width="5"
        />
      </Form.Group>
      <Form.Group>
        <Form.Input
          name="district"
          value={district}
          onChange={handleChange}
          placeholder="District / Division"
          required
          width="5"
        />
        <Form.Input
          name="street"
          value={street}
          onChange={handleChange}
          placeholder="Street"
          required
          width="11"
        />
      </Form.Group>
      <Form.Input
        name="buildingNo"
        type="number"
        min="0"
        value={buildingNo}
        onChange={handleChange}
        placeholder="Building No."
        required
        width="5"
      />
      <Form.Button
        content="Or Pick Location"
        icon="world"
        labelPosition="left"
        color="teal"
      />
      <Form.Button onClick={next}>Next</Form.Button>
    </>
  );
}
