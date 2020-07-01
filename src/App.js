// External libraries
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Pages
import PrimaryLanding from "./pages/PrimaryLanding";
import SecondaryLanding from "./pages/SecondaryLanding";
import AddNewLocation from "./pages/AddNewLocation";
import EmptyPage from "./pages/EmptyPage";
import LibraryRegister from "./pages/LibraryRegister";
import LibraryMain from "./pages/LibraryMain";
import DiscussionBoard from "./pages/DiscussionBoard";
import GeneralDiscussionBoard from "./pages/GeneralDiscussionBoard";

// Components
import Header from "./components/Header";
import ManagerTools from "./components/ManagerTools";
// import Footer from "./components/Footer";

// Styles
import "./App.css";

/* 
  Main app:
    the entry point file and is using react router to implement client side routing (switch between diffrent components based on the url)
*/
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Switch>
            <Route path="/library/register" component={LibraryRegister} />
            <Route path="/new-location" component={AddNewLocation} />
            <Route path="/secondary" component={SecondaryLanding} />
            <Route path="/unitId/manager" component={ManagerTools} />
            <Route path="/empty" component={EmptyPage} />
            <Route path="/library" component={LibraryMain} />
            <Route path="/unitId/discussion" component={DiscussionBoard} />
            <Route path="/discussion" component={GeneralDiscussionBoard} />
            <Route path="/" component={PrimaryLanding} />
          </Switch>
        </main>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}
