import React, { Component } from 'react';
import { Grid, Segment, Label, Header, Divider, Image } from 'semantic-ui-react';

export default class AboutMe extends Component {
  
  render() {
    return (
      <Segment  color="olive" className='segment-no-border' >
        <Label color="olive" ribbon>About Me</Label>
        <Header as="h1" color="grey">Heya There!</Header>
        <Divider/>

        <Grid columns={2} divided>
          <Grid.Column>
            I am Simon Tang and I was born into a family of 5 in Australia 21 years ago. I have a brother 2 years and 11 years older than me.
            I grew up in bankstown and went to a local public school. I wasn't great at making friends but the people and teachers there were nice to me. 
            I picked up drawing as a hobby as I was complimented for it often and was fascinated by space and what lay beyond the world of our own. <br/> <br/>

            As my oldest brother was building his personal computer and constantly upgrading it, 
            spare parts were brought together into a family personal computer by which I found my love for computer games.
            I enjoyed playing a variety of games but I became attached to real-time strategy games as that was most of what we had at the time. <br/> <br/>

            I had always enjoyed designing, building things, understanding machines and tools, seeing how they could be made better. 
            Even as a child, something like Lego was never boring and I still love it today.
            As I grew older and understood I needed a direction in life. Both my brothers pointed me in the direction of software engineering and web development.
            It was different from what I had aspired to be as a child, but similar enough that I could enjoy the practice of it.

          </Grid.Column>

          <Grid.Column>
            <Image src="img/me.jpg" size="small" centered />
          </Grid.Column>
        </Grid>

        
      </Segment>
    )
  }
}