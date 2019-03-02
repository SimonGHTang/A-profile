import React, { Component } from 'react';
import { Grid, Segment, Label, Header, Divider, Modal, Image } from 'semantic-ui-react';

export default class AboutMe extends Component {
  
  render() {
    return (
      <Segment  color="violet">
        <Label color="violet" ribbon>Gallery</Label>
        <Header as="h1" color="grey">Some Nice Pictures I like~</Header>
        <Divider/>

        <Grid divided >
          <Grid.Row centered >
            <Grid.Column width={5} >
              { <Modal className="center-modal" trigger={<Image size="large" src="img/ship-sail.jpg" />}>
                <Modal.Content >
                  <Image centered src="img/ship-sail.jpg" />
                </Modal.Content>
              </Modal> }
            </Grid.Column>

            <Grid.Column width={5} >
              <Modal className="center-modal" trigger={<Image size="large" src="img/ruined-castle.jpg" />}>
                  <Modal.Content >
                    <Image centered src="img/ruined-castle.jpg" />
                  </Modal.Content>
                </Modal>
            </Grid.Column>

            <Grid.Column width={5} >
              <Modal className="center-modal" trigger={<Image size="large" src="img/sunset-red.jpg" />}>
                <Modal.Content >
                  <Image centered src="img/sunset-red.jpg" />
                </Modal.Content>
              </Modal>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row centered >
            <Grid.Column width={5} >
              { <Modal className="center-modal" trigger={<Image size="large" src="img/planet-colour.jpg" />}>
                <Modal.Content >
                  <Image centered src="img/castle.jpg" />
                </Modal.Content>
              </Modal> }
            </Grid.Column>

            <Grid.Column width={5} >
              <Modal className="center-modal" trigger={<Image size="large" src="img/robo-head.jpg" />}>
                  <Modal.Content >
                    <Image centered src="img/clockwork.png" />
                  </Modal.Content>
                </Modal>
            </Grid.Column>

            <Grid.Column width={5} >
              <Modal className="center-modal" trigger={<Image size="large" src="img/strange-ship.jpg" />}>
                <Modal.Content >
                  <Image centered src="img/earth-light.jpg" />
                </Modal.Content>
              </Modal>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row centered >
            <Grid.Column width={5} >
              { <Modal className="center-modal" trigger={<Image size="large" src="img/steampunk-ship.jpg" />}>
                <Modal.Content >
                  <Image centered src="img/hyperion.jpg" />
                </Modal.Content>
              </Modal> }
            </Grid.Column>

            <Grid.Column width={5} >
              <Modal className="center-modal" trigger={<Image size="large" src="img/citadel.jpg" />}>
                  <Modal.Content >
                    <Image centered src="img/robot-laputa.jpg" />
                  </Modal.Content>
                </Modal>
            </Grid.Column>

            <Grid.Column width={5} >
              <Modal className="center-modal" trigger={<Image size="large" src="img/wormhole.jpg" />}>
                <Modal.Content >
                  <Image centered src="img/night-sky.jpg" />
                </Modal.Content>
              </Modal>
            </Grid.Column>
          </Grid.Row>

        </Grid>

        
      </Segment>
    )
  }
}