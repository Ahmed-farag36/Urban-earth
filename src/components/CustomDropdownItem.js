// External libraries
import React from "react";

// Styles
import "./styles/CustomDropdownItem.css";

export default function CustomDropdownItem({ icon: Icon, text }) {
  return (
    <div id="custom-dropdown-item">
      <Icon width="20" />
      <span>{text}</span>
    </div>
  );
}
