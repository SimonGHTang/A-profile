import React, { Component } from 'react';
import { Grid, Segment, Label, Header, Divider, Container } from 'semantic-ui-react';

export default class Welcome extends Component {
  
  render() {
    return (
      <Grid >
        <Grid.Column width={2}>
        </Grid.Column>
        <Grid.Column width={12} onMouseLeave={this.props.sidebarShow} onMouseOver={this.props.sidebarHide} >
          <div className="body-padding">
            <Segment  color="red">
              <Label color="red" ribbon>Welcome Page</Label>
              <Header as="h2" color="grey">Welcome</Header>
              <Divider/>
              <Container >
                Hello, my name is Simon Tang and I am 21 years old. 
                I am a software developer currently in practice and seeking experience along with employment.
                This is a front-end webpage I built as part of a portfolio and to help serve as an introduction for me.
              </Container>

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