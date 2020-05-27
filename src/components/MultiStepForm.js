// External libraries
import React from "react";
import { useStep } from "react-hooks-helper";

// Components
import NewLocation from "./NewLocation";
import LocationDetails from "./LocationDetails";

// Custom Hooks
import useInput from "../hooks/useInput";

// Global Variables
const steps = [{ id: "newLocation" }, { id: "locationDetails" }];

/*
  Adding new location form consists of two child forms
*/
export default function MultiStepForm() {
  const { input, handleChange } = useInput();
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { input, handleChange, navigation };

  switch (id) {
    case "newLocation":
      return <NewLocation {...props} />;
    case "locationDetails":
      return <LocationDetails {...props} />;
    default:
      return null;
  }
}
