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

        <div className='gallery-scroll' >
          <Grid className='gallery-grid-width' divided centered >
            <Grid.Row centered >
              <GalleryModule imageSource="img/full-backgrounds/castle.jpg"/>
              <GalleryModule imageSource="img/full-backgrounds/planet-colour.jpg"/>
              <GalleryModule imageSource="img/full-backgrounds/sunset-red.jpg"/>
            </Grid.Row>
            <Divider className='gallery-divider' />
            <Grid.Row centered >
              <GalleryModule imageSource="img/full-backgrounds/wormhole.jpg"/>
              <GalleryModule imageSource="img/full-backgrounds/night-sky.jpg"/>
              <GalleryModule imageSource="img/full-backgrounds/earth-light.jpg"/>
            </Grid.Row>
            <Divider className='gallery-divider' />
            <Grid.Row centered >
              <GalleryModule imageSource="img/full-backgrounds/ruined-castle.jpg"/>
              <GalleryModule imageSource="img/full-backgrounds/citadel.jpg"/>
              <GalleryModule imageSource="img/full-backgrounds/dracula-castle.jpg"/>
            </Grid.Row>
            <Divider className='gallery-divider' />
            <Grid.Row centered >
              <GalleryModule imageSource="img/full-backgrounds/ship-sail.jpg"/>
              <GalleryModule imageSource="img/full-backgrounds/dragon.jpg"/>
              <GalleryModule imageSource="img/full-backgrounds/forest-dragon.jpg"/>
            </Grid.Row>
            <Divider className='gallery-divider' />
            <Grid.Row centered >
              <GalleryModule imageSource="img/full-backgrounds/hyperion.jpg"/>
              <GalleryModule imageSource="img/full-backgrounds/steampunk-ship.jpg"/>
              <GalleryModule imageSource="img/full-backgrounds/strange-ship.jpg"/>
            </Grid.Row>
            <Divider className='gallery-divider' />
            <Grid.Row centered >
              <GalleryModule imageSource="img/full-backgrounds/robot-laputa.jpg"/>
              <GalleryModule imageSource="img/full-backgrounds/robot-head.jpg"/>
              <GalleryModule imageSource="img/full-backgrounds/clockwork.png"/>
            </Grid.Row>
            <Divider className='gallery-divider' />
            <Grid.Row centered >
              <GalleryModule imageSource="img/full-backgrounds/tree.jpg"/>
              <GalleryModule imageSource="img/full-backgrounds/flower-pot.jpg"/>
              <GalleryModule imageSource="img/full-backgrounds/bonsai-tree.jpg"/>
            </Grid.Row>
          </Grid>
        </div>

      </Segment>
    )
  }
}