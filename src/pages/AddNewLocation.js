import React from "react";
import { Header, Form } from "semantic-ui-react";

// COMPONENTS
import MultiStepForm from "../components/MultiStepForm";

// STYLES
import "./styles/AddNewLocation.css";

export default () => (
	<Form id="new-location">
		<Header as="h2" content="Add New Location" />
		<MultiStepForm />
	</Form>
);
