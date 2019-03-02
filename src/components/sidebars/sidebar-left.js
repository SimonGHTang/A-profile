import React from "react";
import { Sidebar, Menu, Icon } from "semantic-ui-react";

export default (props) => {
  return (
    <Sidebar as={Menu} animation='overlay' direction='left' icon='labeled'
      inverted vertical visible={props.visible} width='small'
    >
      <Menu.Item as='a' onClick={props.selectWelcome} >
        <Icon name='desktop' />
        Welcome
      </Menu.Item>
      <Menu.Item as='a' onClick={props.selectProfile} >
        <Icon name='address book outline' />
        Profile
      </Menu.Item>
      <Menu.Item as='a' onClick={props.selectAbout} >
        <Icon name='coffee' />
        About Me
      </Menu.Item>
      <Menu.Item as='a' onClick={props.selectGames} >
        <Icon name='gamepad' />
        Games
      </Menu.Item>
      <Menu.Item as='a' onClick={props.selectGallery} >
        <Icon name='image' />
        View Gallery
      </Menu.Item>
      <Menu.Item as='a' onClick={props.viewBackground} >
        <Icon name='expand arrows alternate' />
        View Background
      </Menu.Item>
      <Menu.Item as='a' onClick={props.selectTechnical}>
        <Icon name="wrench"/>
        Technical
      </Menu.Item>
    </Sidebar>
  );
};