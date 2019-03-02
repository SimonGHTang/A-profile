import React, { Component } from 'react';
import { Grid, Segment, Label, Header, Divider, Image } from 'semantic-ui-react';

export default class Profile extends Component {
  
  render() {
    return (
      <Grid >
        <Grid.Column width={2}>
        </Grid.Column>
        <Grid.Column width={12} className={this.props.bodyOpacity} onMouseLeave={this.props.sidebarShow} onMouseOver={this.props.sidebarHide} >
          <div className="body-padding">
            <Segment  color="blue">
              <Label color="blue" ribbon>Profile</Label>
              <Header as="h1" color="grey">Hello!</Header>

              <Divider/>

              <Grid column={2} divided>
                <Grid.Column>
                  <Image src="img/me.jpg" size="medium" />
                </Grid.Column>
                <Grid.Column>

                </Grid.Column>
              </Grid>

              
            </Segment>
          </div>
        </Grid.Column>
        <Grid.Column width={2}>
        </Grid.Column>
      </Grid>
    )
  }
}