// External libraries
import React from "react";
import { ChatProvider, Channel } from "@twilio-labs/react-chat";
import { Header } from "semantic-ui-react";

// Components
import SubMenu from "../components/SubMenu";
import Chat from "../components/Chat";

// Styles
import "./styles/DiscussionBoard.css";

/* 
  The page where unit's residents can disscuss their issues togather
*/
export default function DiscussionBoard() {
  return (
    <div id="discussion-board">
      <SubMenu />
      <ChatProvider
        tokenUrl="https://5tvm5.sse.codesandbox.io/token"
        onLoading={() => <p>Loading Chat...</p>}
        onError={error => <p>{error.message}</p>}
      >
        <Header as="h2" content="Unit X Chat" />
        <Channel uniqueName="unitX">
          {channelContext => {
            return <Chat {...channelContext} />;
          }}
        </Channel>
      </ChatProvider>
    </div>
  );
}
