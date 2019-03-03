import React, { Component } from 'react';
import { Grid, Segment, Label, Header, Divider } from 'semantic-ui-react';

import GalleryModule from './gallery-module.js'

export default class AboutMe extends Component {
  
  render() {
    return (
      <Segment  color="violet">
        <Label color="violet" ribbon>Gallery</Label>
        <Header as="h1" color="grey">Some Nice Pictures I like~</Header>
        <Divider/>

        <div className='gallery-scroll' >
          <Grid className='gallery-grid-width' divided centered >
            <Grid.Row centered >
              <GalleryModule imageSource="img/castle.jpg"/>
              <GalleryModule imageSource="img/planet-colour.jpg"/>
              <GalleryModule imageSource="img/sunset-red.jpg"/>
            </Grid.Row>

            <Grid.Row centered >
              <GalleryModule imageSource="img/wormhole.jpg"/>
              <GalleryModule imageSource="img/night-sky.jpg"/>
              <GalleryModule imageSource="img/earth-light.jpg"/>
            </Grid.Row>

            <Grid.Row centered >
              <GalleryModule imageSource="img/ruined-castle.jpg"/>
              <GalleryModule imageSource="img/citadel.jpg"/>
              <GalleryModule imageSource="img/dracula-castle.jpg"/>
            </Grid.Row>

            <Grid.Row centered >
              <GalleryModule imageSource="img/ship-sail.jpg"/>
              <GalleryModule imageSource="img/dragon.jpg"/>
              <GalleryModule imageSource="img/forest-dragon.jpg"/>
            </Grid.Row>
            
            <Grid.Row centered >
              <GalleryModule imageSource="img/hyperion.jpg"/>
              <GalleryModule imageSource="img/steampunk-ship.jpg"/>
              <GalleryModule imageSource="img/strange-ship.jpg"/>
            </Grid.Row>

            <Grid.Row centered >
              <GalleryModule imageSource="img/robot-laputa.jpg"/>
              <GalleryModule imageSource="img/robot-head.jpg"/>
              <GalleryModule imageSource="img/clockwork.png"/>
            </Grid.Row>

            <Grid.Row centered >
              <GalleryModule imageSource="img/tree.jpg"/>
              <GalleryModule imageSource="img/flower-pot.jpg"/>
              <GalleryModule imageSource="img/bonsai-tree.jpg"/>
            </Grid.Row>
          </Grid>
        </div>

      </Segment>
    )
  }
}