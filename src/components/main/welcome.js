import React, { Component } from 'react';
import { Grid, Segment, Label, Header, Divider, Container, Image } from 'semantic-ui-react';

export default class Welcome extends Component {
  
  render() {
    return (
      <Segment  color="red">
        <Label color="red" ribbon>Welcome Page</Label>
        <Header as="h2" color="grey">Welcome!</Header>
        <Divider/>
        <Container >
          <font size="3">Hello, my name is Simon Tang and I am 21 years old. <br/>
          I am a software developer currently in practice and seeking experience along with employment. <br/>
          This is a front-end webpage I built as part of a portfolio and to help serve as an introduction for me. <br/></font>
        </Container>

        <Divider/>

        <Grid columns={2} divided>
          <Grid.Column>
            <Image src="img/fruit-vase.jpg" size="large" centered />
          </Grid.Column>

          <Grid.Column>
            
          </Grid.Column>
        </Grid>

        
      </Segment>
    )
  }
}