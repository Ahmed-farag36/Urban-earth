// External libraries
import React from "react";
import { Header } from "semantic-ui-react";

// Components
import SubMenu from "../components/SubMenu";
import FunctionsCard from "../components/FunctionsCard";
import { Idea } from "../components/Icons";

// Styles
import "./styles/LibraryRegister.css";

/* 
  The page where urban registered functions are listed
*/
export default function LibraryRegister() {
  return (
    <div id="library-register">
      <SubMenu activePanel="libraryRegister" />
      <section>
        <FunctionsCard />
      </section>
      <Header
        size="medium"
        content="Tip: Add more from Library page"
        icon={<Idea width="30" />}
      />
    </div>
  );
}
