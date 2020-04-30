import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// PAGES
import PrimaryLanding from "./pages/PrimaryLanding";
import SecondaryLanding from "./pages/SecondaryLanding";
import AddNewLocation from "./pages/AddNewLocation";
import EmptyPage from "./pages/EmptyPage";

// COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";

// STYLES
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Switch>
            <Route path="/new-location" component={AddNewLocation} />
            <Route path="/secondary" component={SecondaryLanding} />
            <Route path="/empty" component={EmptyPage} />
            <Route path="/" component={PrimaryLanding} />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
