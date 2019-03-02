import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";

export default () => {
  return(
    <Card centered >
      <Image className="card-image" src="img/logo-node.png" />
      <Card.Content>
        <Card.Header>Node JS</Card.Header>
        <Card.Meta><span>JavaScript Runtime Environment</span></Card.Meta>
        <Card.Description>Used to execute javascript code outside of browsers for servers. Servers can be programmed to produce dynamic web-pages or function as APIs</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a rel="noopener noreferrer" href="https://www.joyent.com/" target="_blank">
          <Icon name="code"/>
          Support by Joyent
        </a>
      </Card.Content>
    </Card>
  )
}