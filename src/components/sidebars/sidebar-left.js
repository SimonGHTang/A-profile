import React from "react";
import { Sidebar, Menu, Icon } from "semantic-ui-react";

export default (props) => {
  return (
    <Sidebar
      as={Menu}
      animation='overlay'
      direction='left'
      icon='labeled'
      inverted
      vertical
      visible={props.visible}
      width='small'
    >
      <Menu.Item as='a'>
        <Icon name='desktop' />
        Welcome
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='gamepad' />
        Games
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='address book outline' />
        Profile
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='coffee' />
        About Me
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='expand' onClick={this.props.toggleBackground} />
        View Background Image
      </Menu.Item>
    </Sidebar>
  );
};