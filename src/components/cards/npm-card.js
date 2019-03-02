import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";

export default () => {
  return(
    <Card centered >
      <Image className="card-image" src="img/logo-npm.png" />
      <Card.Content>
        <Card.Header>Node Package Manager</Card.Header>
        <Card.Meta><span>JavaScript Package Manager</span></Card.Meta>
        <Card.Description>Downloads and manages packages like ReactJS or SemanticJs, which are written by other companies or developers and made publicly available to use</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a rel="noopener noreferrer" href="https://github.com/isaacs">
          <Icon name="inbox"/>
          Original Author: Issac Z Schleuter
        </a>
      </Card.Content>
    </Card>
  )
}
