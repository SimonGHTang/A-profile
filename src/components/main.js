import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';

export default class Main extends Component {
  
  render() {
    return (
      <Grid>
        <Grid.Column width={2}>
        </Grid.Column>
        <Grid.Column width={12} onMouseLeave={this.props.sidebarShow} onMouseOver={this.props.sidebarHide} >
          <div className="centralised">
            <Segment basic color="red">

            </Segment>
          </div>
        </Grid.Column>
        <Grid.Column width={2}>
        </Grid.Column>
      </Grid>
    )
  }
}