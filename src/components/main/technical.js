import React, { Component } from 'react';
import { Grid, Segment, Label, Header, Divider, Menu, Icon } from 'semantic-ui-react';

import NodeJSCard from '../cards/nodejs-card.js';
import ReactJSCard from '../cards/reactjs-card.js';
import NPMCard from '../cards/npm-card.js';
import SemanticCard from '../cards/semantic-card.js'

export default class Profile extends Component {
  constructor() {
    super();

    this.state = {
      like: 0,
    }
  }

  like() { this.setState({ like: this.state.like + 1 }) };
  
  render() {
    return (
      <Segment  color="grey">
        <Label color="grey" ribbon>Technicals</Label>
        <Header as="h2" color="grey">Some Frameworks and Libraries used</Header>

        <Divider/>

        <Grid>
          <Grid.Column width="4">
            <NodeJSCard />
          </Grid.Column>
          <Grid.Column width="4">
            <ReactJSCard />
          </Grid.Column>
          <Grid.Column width="4">
            <NPMCard />
          </Grid.Column>
          <Grid.Column width="4">
            <SemanticCard />
          </Grid.Column>
        </Grid>

        <Divider />

        <Menu compact>
            <Menu.Item as='a' onClick={this.like.bind(this)}>
              <Icon name='thumbs up' /> Like
              <Label color='blue' floating>
                  {this.state.like}
              </Label>
              </Menu.Item>
              <Menu.Item as='a'>
              <Icon name='eye' /> Views
              <Label color='red' floating>
                  {this.props.views}
              </Label>
              </Menu.Item>
            </Menu>
      </Segment>
    )
  }
}