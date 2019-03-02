import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";

export default () => {
  return(
    <Card centered >
      <Image className="card-image" src="img/logo-react.png" />
      <Card.Content>
        <Card.Header>React JS</Card.Header>
        <Card.Meta><span>JavaScript UI Library</span></Card.Meta>
        <Card.Description>Used to build single page web application user interfaces in structured components encapsulating visual and behaviour into an organized DOM tree</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a rel="noopener noreferrer" href="https://www.facebook.com/react/">
          <Icon name="facebook"/>
          Developed by Facebook
        </a>
      </Card.Content>
    </Card>
  )
}
