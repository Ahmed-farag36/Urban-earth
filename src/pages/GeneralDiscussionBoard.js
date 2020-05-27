// External libraries
import React from "react";
import { ChatProvider, Channel } from "@twilio-labs/react-chat";
import { Header } from "semantic-ui-react";

// Components
import Chat from "../components/Chat";

// Styles
import "./styles/GeneralDiscussionBoard.css";

/* 
  The page where all app users can chat and make new friends
*/
export default function GeneralDiscussionBoard(props) {
  return (
    <div id="discussion-board">
      <ChatProvider
        tokenUrl="https://5tvm5.sse.codesandbox.io/token"
        onLoading={() => <p>Loading Chat...</p>}
        onError={error => <p>{error.message}</p>}
      >
        <Header as="h2" content="General Chat" />
        <Channel uniqueName="general">
          {channelContext => {
            return <Chat {...channelContext} />;
          }}
        </Channel>
      </ChatProvider>
    </div>
  );
}
