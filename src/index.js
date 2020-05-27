// External libraries
import React from "react";
import ReactDOM from "react-dom";

// Main application
import App from "./App";

// Mounting the main app to html page
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
