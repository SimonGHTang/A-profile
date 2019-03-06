import React, { Component } from 'react';
import { Grid, Segment, Label, Header, Divider } from 'semantic-ui-react';

import GalleryModule from './gallery-module.js'

export default class AboutMe extends Component {
  
  render() {
    return (
      <Segment  color="violet" className='segment-no-border' >
        <Label color="violet" ribbon>Gallery</Label>
        <Header as="h1" color="grey">Some Nice Pictures I like~</Header>
        <Divider/>


        <Grid className='gallery-height'  >
          <Grid.Row className="no-space"  >
            <GalleryModule imgSrc="img/full-backgrounds/castle.jpg"/>
            <GalleryModule imgSrc="img/full-backgrounds/planet-colour.jpg"/>
            <GalleryModule imgSrc="img/full-backgrounds/sunset-red.jpg"/>
          </Grid.Row>
          <Grid.Row className='no-space'  >
            <GalleryModule imgSrc="img/full-backgrounds/wormhole.jpg"/>
            <GalleryModule imgSrc="img/full-backgrounds/night-sky.jpg"/>
            <GalleryModule imgSrc="img/full-backgrounds/earth-light.jpg"/>
          </Grid.Row>
          <Grid.Row className='no-space'  >
            <GalleryModule imgSrc="img/full-backgrounds/ruined-castle.jpg"/>
            <GalleryModule imgSrc="img/full-backgrounds/citadel.jpg"/>
            <GalleryModule imgSrc="img/full-backgrounds/dracula-castle.jpg"/>
          </Grid.Row>
          <Grid.Row className='no-space'  >
            <GalleryModule imgSrc="img/full-backgrounds/ship-sail.jpg"/>
            <GalleryModule imgSrc="img/full-backgrounds/dragon.jpg"/>
            <GalleryModule imgSrc="img/full-backgrounds/forest-dragon.jpg"/>
          </Grid.Row>
          <Grid.Row className='no-space'  >
            <GalleryModule imgSrc="img/full-backgrounds/hyperion.jpg"/>
            <GalleryModule imgSrc="img/full-backgrounds/steampunk-ship.jpg"/>
            <GalleryModule imgSrc="img/full-backgrounds/strange-ship.jpg"/>
          </Grid.Row>
          <Grid.Row className='no-space'  >
            <GalleryModule imgSrc="img/full-backgrounds/robot-laputa.jpg"/>
            <GalleryModule imgSrc="img/full-backgrounds/robot-head.jpg"/>
            <GalleryModule imgSrc="img/full-backgrounds/clockwork.png"/>
          </Grid.Row>
          <Grid.Row className='no-space' >
            <GalleryModule imgSrc="img/full-backgrounds/tree.jpg"/>
            <GalleryModule imgSrc="img/full-backgrounds/flower-pot.jpg"/>
            <GalleryModule imgSrc="img/full-backgrounds/bonsai-tree.jpg"/>
          </Grid.Row>
        </Grid>

      </Segment>
    )
  }
}