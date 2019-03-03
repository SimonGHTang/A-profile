import React from 'react';
import { Grid, Modal, Image } from 'semantic-ui-react';

export default (props) => {
  return (
    <Grid.Column width={5} >
      { <Modal className="center-modal" trigger={<Image size="large" src={props.imageSource} />}>
        <Modal.Content >
          <Image centered src={props.imageSource} />
        </Modal.Content>
      </Modal> }
    </Grid.Column>
  )
}