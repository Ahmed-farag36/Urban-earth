// External libraries
import React from "react";

// Components
import { Link } from "react-router-dom";

// Styles
import "./styles/Footer.css";

/*
  Footer for all app's pages
 */
export default function Footer() {
  return (
    <footer>
      <img src="/images/icons8-globe-earth-100.png" alt="" />
      <Link to="/">
        <span>Urban.Earth</span>
      </Link>
    </footer>
  );
}
