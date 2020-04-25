import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// PAGES
import PrimaryLanding from "./pages/PrimaryLanding";
import SecondaryLanding from "./pages/SecondaryLanding";
import AddNewBuilding from "./pages/AddNewBuilding";

// COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";

// STYLES
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/landing/new-building" component={AddNewBuilding} />
          <Route path="/secondary" component={SecondaryLanding} />
          <Route path="/landing" component={PrimaryLanding} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
