import React from "react";

import PrimaryLanding from "./pages/PrimaryLanding";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <PrimaryLanding />
      <Footer />
    </div>
  );
}
