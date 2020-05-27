// External libraries
import React from "react";
import { Card, Form, Button, Input } from "semantic-ui-react";

// Components
import ChatCard from "./ChatCard";

// Styles
import "./styles/Chat.css";

/* 
  responsible for displaying channel messgaes and send user new message
*/
export default function Chat({ messages, members, channel }) {
  console.log(messages, members, channel);

  const handleSendMessage = event => {
    event.preventDefault();
    channel.sendMessage(event.target.message.value);
    event.target.message.value = "";
  };

  return (
    <div id="chat">
      <Card.Group id="messages-list" itemsPerRow="1">
        {messages.map(({ state }) => (
          <ChatCard
            id={state.sid}
            image="https://react.semantic-ui.com/images/avatar/large/molly.png"
            username={state.author}
            time={state.timestamp.toDateString()}
          >
            {state.body}
          </ChatCard>
        ))}
      </Card.Group>
      <Form id="messages-form" onSubmit={handleSendMessage}>
        <Input
          name="message"
          placeholder="Message to x Neighborhood"
          labelPosition="left"
          label={<Button icon="camera" color="violet" />}
          action={<Button icon="microphone" color="violet" basic />}
        />
      </Form>
    </div>
  );
}
