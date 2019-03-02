import React, { Component } from 'react';
import { Grid, Segment, Label, Header, Divider, Image, Icon, Menu } from 'semantic-ui-react';

export default class AboutMe extends Component {
  
  render() {
    return (
      <Segment  color="red">
        <Label color="red" ribbon>About Me</Label>
        <Header as="h1" color="grey">Heya There!</Header>
        <Divider/>

        <Grid columns={2} divided>
          <Grid.Column>

          </Grid.Column>

          <Grid.Column>
            <Image src="img/me.jpg" size="large" centered />
          </Grid.Column>
          <Menu compact>
            <Menu.Item>
              <Icon/>
            </Menu.Item>
          </Menu>
        </Grid>

        
      </Segment>
    )
  }
}