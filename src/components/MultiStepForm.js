import React from "react";
import { useStep } from "react-hooks-helper";

// COMPONENETS
import NewLocation from "./NewLocation";
import LocationDetails from "./LocationDetails";

// CUSOTM HOOKS
import useInput from "../hooks/useInput";

// GLOBAL VARS
const steps = [{ id: "newLocation" }, { id: "locationDetails" }];

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
