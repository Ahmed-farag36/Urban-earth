import React from "react";

import "./styles/Footer.css";
import { Link } from "react-router-dom";

export default () => (
  <footer>
    <img src="/images/icons8-globe-earth-100.png" alt="" />
    <Link to="/">
      <span>Urban.Earth</span>
    </Link>
  </footer>
);
