import React, { Component } from 'react';
import { Grid, Segment, Label, Image } from 'semantic-ui-react';

export default class Profile extends Component {
  
  render() {
    return (
      <Segment color="blue">
        <Label color="blue" ribbon>Profile</Label>
        <Grid divided>
          <Grid.Column  className='profile-image' width={8} >
          <Image src="img/Simon-Tang-Resume-3.svg"/>
          </Grid.Column>

          <Grid.Column  className='profile-image' width={8} >
          <Image src="img/Simon-Tang-Resume-3.2.svg"/>
          </Grid.Column>
        </Grid>

        
      </Segment>
    )
  }
}