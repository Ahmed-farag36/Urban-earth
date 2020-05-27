// External libraries
import React from "react";
import { Button, Card, Image } from "semantic-ui-react";

// Styles
import "./styles/ChatCard.css";

/*
  Display one message and handle replay to it
*/
export default function ChatCard({ image, username, time, children }) {
  return (
    <Card className={username === "Me" && "me"}>
      <Card.Content textAlign={username === "Me" ? "right" : "left"}>
        <Image
          floated={username === "Me" ? "right" : "left"}
          size="mini"
          src={image}
        />
        <Card.Header content={username} />
        <Card.Meta content={time} />
        <Card.Description content={children} />
      </Card.Content>
      <Button basic content="Reply" icon="reply" />
    </Card>
  );
}
