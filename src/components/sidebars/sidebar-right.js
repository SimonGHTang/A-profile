import React from "react";
import { Sidebar, Menu, Icon, Divider, Popup } from "semantic-ui-react";

export default (props) => {
  return (
    <Sidebar as={Menu} animation='overlay' direction='right'
      inverted vertical visible={props.visible} className="sidebar"
    >
      <Menu.Item as='h4' header><Icon name="external"  />External Links</Menu.Item>
      <Divider />
      <Popup
        trigger={<Menu.Item as="a" header href="https://github.com/SimonGHTang/A-profile"><Icon name="git square" size="large" />GitHub </Menu.Item>}
        header="GitHub"
        content="Link to the source code"
      />
      <Popup
        trigger={<Menu.Item as="a" header href="https://react.semantic-ui.com/"><Icon name="file alternate" size="large" />Semantic ReactJS</Menu.Item>}
        header="Semantic ReactJS"
        content="Link to the Semantic ReactJS documentation"
      />
      <Popup
        trigger={<Menu.Item as="a" header href="https://www.linkedin.com/in/simon-tang-7a251a173/"><Icon name="linkedin" size="large" />Linked In</Menu.Item>}
        header="Linked In"
        content="Link to my Linked In Profile"
      />
    </Sidebar>
  );
};