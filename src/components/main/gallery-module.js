import React from 'react';
import { Grid, Modal, Image } from 'semantic-ui-react';

export default (props) => {
  return (
    <Grid.Column className="zoom no-space" width={5} >
      { <Modal className="center-modal" trigger={<Image size="large" src={props.imgSrc} />}>
        <Modal.Content >
          <Image centered src={props.imgSrc} />
        </Modal.Content>
      </Modal> }
    </Grid.Column>
  )
}