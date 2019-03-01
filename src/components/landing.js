import React, { Component } from 'react';
import { Segment, Sidebar } from 'semantic-ui-react';
import '../App.css';

import Main from "./main.js";
import SidebarLeft from "./sidebars/sidebar-left.js";
import SidebarRight from "./sidebars/sidebar-right.js";

class Landing extends Component {
  constructor() {
    super();
    this.state = { 
      background: "background-hyperion",
      sidebarVisible: true,
      bodyOpacity: true,
      page: ""
    }
  }

  sidebarShow = () => this.setState({ sidebarVisible: true })
  sidebarHide = () => this.setState({ sidebarVisible: false })

  toggleBackground = () => this.setState({ bodyOpacity: !bodyOpacity })

  render() {
    return (
      <Sidebar.Pushable as={Segment} basic id="background" className={this.state.background}>
        <SidebarLeft visible={this.state.sidebarVisible} toggleBackground={this.toggleBackground.bind(this)} />
        <SidebarRight visible={this.state.sidebarVisible} />
        <Sidebar.Pusher >
          
          <Main className="main" sidebarShow={this.sidebarShow.bind(this)} sidebarHide={this.sidebarHide.bind(this)} basic/>
            
        </Sidebar.Pusher>
      </Sidebar.Pushable>  
    );
  }
}

export default Landing;
