import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";

export default () => {
  return(
    <Card centered >
      <Image className="card-image" src="/img/logo-semantic.png" />
      <Card.Content>
        <Card.Header>Semantic UI React</Card.Header>
        <Card.Meta><span>User Interface Framework</span></Card.Meta>
        <Card.Description>Semantic UI React deliver the visuals for this web application. It comes with a variety of simple design features that are easy to use and integrate</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a rel="noopener noreferrer" href="https://github.com/levithomason">
          <Icon name="paint brush"/>
          Original Developer: Levi Thomason
        </a>
      </Card.Content>
    </Card>
  )
}
