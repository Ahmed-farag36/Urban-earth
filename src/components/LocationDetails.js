// External libraries
import React from "react";
import { Form, Header } from "semantic-ui-react";

// Styles
import "./styles/locationDetails.css";

/*
  Step two of adding new location multi-step form
*/
export default function LocationDetails({ input, handleChange, navigation }) {
  const {
    publicName,
    description,
    totalUnits,
    totalFloors,
    userStatus,
    isEnclosedCompound,
    apartmentNo,
    floor,
    apartmentUniqueName,
    allowOthersChanges
  } = input;
  const { previous } = navigation;

  return (
    <>
      <Header as="h3" content="Location Details:" />
      <Form.Group>
        <Form.Input
          name="publicName"
          value={publicName}
          onChange={handleChange}
          placeholder="public name or description"
          width="8"
        />
        <Form.Select
          name="description"
          value={description}
          onChange={handleChange}
          placeholder="Building Type"
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
          width="6"
        />
        <Form.Input
          name="totalUnits"
          type="number"
          min="0"
          value={totalUnits}
          onChange={handleChange}
          placeholder="Total Units"
          width="4"
        />
      </Form.Group>
      <Form.Group>
        <Form.Input
          name="totalFloors"
          type="number"
          min="0"
          value={totalFloors}
          onChange={handleChange}
          placeholder="Total Floors"
          width="8"
        />
        <Form.Select
          name="userStatus"
          value={userStatus}
          onChange={handleChange}
          placeholder="Your status"
          options={[
            { key: "r", text: "Resident Owner", value: "resident owner" },
            {
              key: "n",
              text: "Non-resident Owner",
              value: "non-resident owner"
            },
            { key: "t", text: "Tenant", value: "tenant" },
            {
              key: "re",
              text: "Resident Relative",
              value: "resident relative"
            }
          ]}
          width="8"
        />
      </Form.Group>
      <Form.Group>
        <Form.Input
          name="apartmentNo"
          type="number"
          min="0"
          value={apartmentNo}
          onChange={handleChange}
          placeholder="Apartment No."
          width="4"
        />
        <Form.Input
          name="floor"
          type="number"
          min="0"
          value={floor}
          onChange={handleChange}
          placeholder="Floor"
          width="4"
        />
        <Form.Input
          name="apartmentUniqueName"
          value={apartmentUniqueName}
          onChange={handleChange}
          placeholder="location unique name to you"
          width="8"
        />
      </Form.Group>
      <Form.Checkbox
        name="allowOthersChanges"
        className="checkbox"
        checked={allowOthersChanges}
        onChange={handleChange}
        label="Allow others to make details changes (if you are the owner)"
      />
      <Form.Checkbox
        className="checkbox"
        name="isEnclosedCompound"
        checked={isEnclosedCompound}
        onChange={handleChange}
        label="Check if this building in an enclosed Residential compound"
      />
      <Form.Button content="Previous" onClick={previous} />
      <Form.Button content="Add" primary type="submit" />
    </>
  );
}
