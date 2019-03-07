import React, { Component } from 'react';
import { Grid, Segment, Label, Header, Divider } from 'semantic-ui-react';

export default class Welcome extends Component {
  
  render() {
    return (
      <Segment  color="red" className='segment-no-border' >
        <Label color="red" ribbon>Welcome Page</Label>
        <Header as="h2" color="grey">Welcome!</Header>
        <Divider/>

        <Grid divided>
          <Grid.Row className='welcome-height' >
            <Grid.Column className="welcome-fill-4" width={4} >
              <p className="welcome-font welcome-color-2" >
              HELLO<br/>
              I AM SIMON TANG<br/>
              THIS IS MY ONLINE PORTFOLIO <br/>
              HAVE FUN BROWSING!</p>
            </Grid.Column>
            <Grid.Column width={4} className="welcome-font welcome-fill-1 welcome-color-1 justify" >
              <font size="4">As part of my practice, I made this front-end webpage as a show of my skills and as an introduction.<br/>
              {/* On the left, under Profile, you will find my resume detailing my contact information, skills and projects worked on. 
              Under buttons is a page of interactive buttons cobbled together. 
              Under View Gallery is a simple variety of pictures of dragons, space, space-ships, castles and scenery I enjoy. 
              Under the Technical tab you can find the resources I used to make up this website. 
              I hope you enjoy and find something interesting here! */}
              </font>
            </Grid.Column>
            <Grid.Column width={4} className="welcome-pattern" ></Grid.Column>
            <Grid.Column width={4} className="welcome-picture-2" ></Grid.Column>
            
          </Grid.Row>
          <Grid.Row className='welcome-height' >
            <Grid.Column width={4} className="welcome-pattern" ></Grid.Column>
            <Grid.Column width={4} className="welcome-picture-1" ></Grid.Column>
            <Grid.Column width={4} className="welcome-fill-1" ></Grid.Column>
            <Grid.Column width={4} className='welcome-font welcome-fill-3 welcome-color-1' >
              <font size="4">
              Left for navigation!<br/>
              <p className="align-bottom-right" >Right for some <br/> external links! <br/></p>
              </font>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        
      </Segment>
    )
  }
}