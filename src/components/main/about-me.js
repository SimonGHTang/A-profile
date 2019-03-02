import React, { Component } from 'react';
import { Grid, Segment, Label, Header, Divider, Image, Icon, Step } from 'semantic-ui-react';

export default class AboutMe extends Component {
  
  render() {
    return (
      <Segment  color="olive">
        <Label color="olive" ribbon>About Me</Label>
        <Header as="h1" color="grey">Heya There!</Header>
        <Divider/>

        <Grid columns={2} divided>
          <Grid.Column>

          </Grid.Column>

          <Grid.Column>
            <Image src="img/me.jpg" size="large" centered />
          </Grid.Column>
          <Step.Group>
            <Step>
                <Icon name="heart" color="red" />
                <Step.Content>
                    <Step.Title>Say Hi!</Step.Title>
                </Step.Content>
            </Step>
            <Step>
                <Icon name="heart"/>
                <Step.Content>
                    <Step.Title>Ok</Step.Title>
                </Step.Content>
            </Step>
        </Step.Group>
        </Grid>

        
      </Segment>
    )
  }
}