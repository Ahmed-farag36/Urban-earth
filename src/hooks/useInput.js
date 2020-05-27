// External libraries
import { useState } from "react";

/*
  A component used for what is called React custom hooks which is a method for handling internal state
*/
export default () => {
  const [input, setInput] = useState({});

  const handleChange = (e, { type, name, value, checked }) => {
    if (type === "checkbox") {
      setInput({ ...input, [name]: checked });
    } else {
      setInput({ ...input, [name]: value });
    }
  };

  return { input, handleChange };
};
