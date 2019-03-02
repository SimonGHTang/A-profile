import React, { Component } from 'react';
import { Grid, Segment, Label, Header, Divider } from 'semantic-ui-react';

export default class Profile extends Component {
  
  render() {
    return (
      <Grid >
        <Grid.Column width={2}>
        </Grid.Column>
        <Grid.Column width={12} className={this.props.bodyOpacity} onMouseLeave={this.props.sidebarShow} onMouseOver={this.props.sidebarHide} >
          <div className="body-padding">
            <Segment  color="grey">
              <Label color="grey" ribbon>Profile</Label>
              <Header as="h2" color="grey">Some Frameworks and Libraries used</Header>
              <Divider/>

              
            </Segment>
          </div>
        </Grid.Column>
        <Grid.Column width={2}>
        </Grid.Column>
      </Grid>
    )
  }
}