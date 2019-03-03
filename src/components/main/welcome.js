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
          I live in Sydney of Australia and praticing software engineering. <br/></font>
        </Container>

        <Divider/>

        <Grid columns={2} divided>
          <Grid.Column>
            <Image src="img/fruit-vase.jpg" size="large" centered />
          </Grid.Column>

          <Grid.Column>
            <font size="3">As part of my practice, I made this front-end webpage.<br/>
            It was done as a show of my skills, as part of a portfolio and to introduce myself. <br/>
            On the right are some external links to my Github portfolio, the Semantic UI Library used to decorate and build this page and my linked in profile. <br/> <br/>
            On the left, under Profile, you will find my resume detailing my contact information, skills and projects worked on. 
            Under buttons is a page of interactive buttons cobbled together. 
            Under View Gallery is a simple variety of pictures of dragons, space, space-ships, castles and scenery I enjoy. 
            Under the Technical tab you can find the resources I used to make up this website. 
            I hope you enjoy and find something interesting here!

             </font>
          </Grid.Column>
        </Grid>

        
      </Segment>
    )
  }
}