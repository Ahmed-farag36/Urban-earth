// External libraries
import React from "react";
import { Header, Form } from "semantic-ui-react";

// Components
import MultiStepForm from "../components/MultiStepForm";

// Styles
import "./styles/AddNewLocation.css";

/* 
	The page where users can add new units
*/
export default function AddNewLocation() {
  return (
    <Form id="new-location">
      <Header as="h2" content="Add New Location" />
      <MultiStepForm />
    </Form>
  );
}
