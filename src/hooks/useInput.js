import { useState } from "react";

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
