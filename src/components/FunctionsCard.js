// External libraries
import React from "react";
import { Header, Image, Popup, Button, Divider } from "semantic-ui-react";

// Components
import {
  Heart,
  Share,
  RemoveFromList,
  Chat,
  Energy2
} from "../components/Icons";

// Styles
import "./styles/FunctionsCard.css";

/*
  Display card for a function and handle discuss, like and share of this function
*/
export default function FunctionsCard({ listed }) {
  return (
    <div id="functions-card">
      <Header size="large" content="Reduce Electrical Consumption" />
      <Header size="small" content="$0" />
      <div className="function-color" />
      <Popup
        trigger={
          <Image>
            <Energy2 width="25" color="#dc6698" />
          </Image>
        }
        content="Power category"
      />
      <Popup
        trigger={
          <Image>
            <RemoveFromList width="30" />
          </Image>
        }
        content="Remove from library register"
      />
      <Popup
        trigger={
          <Image>
            <Chat width="30" />
          </Image>
        }
        content="Talk about in a discussion board"
      />
      <Popup
        trigger={
          <Image>
            <Heart />
          </Image>
        }
        content="Like"
      />
      <Popup
        trigger={
          <Image>
            <Share />
          </Image>
        }
        content="Share"
      />
      {listed && (
        <>
          <Divider />
          <span id="start-date">Start Date: 1/1/2020</span>
          <span id="duration">Duration: 10 Days</span>
          <Button icon="shutdown" />
        </>
      )}
    </div>
  );
}
