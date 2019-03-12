import React, { Component } from 'react';
import { Segment, Sidebar, Grid, Transition } from 'semantic-ui-react';
import '../App.css';

import Welcome from "./main/welcome.js";
import Profile from "./main/profile.js";
import Technical from "./main/technical.js";
import AboutMe from './main/about-me.js';
import Gallery from './main/gallery.js';

import SidebarLeft from "./sidebars/sidebar-left.js";
import SidebarRight from "./sidebars/sidebar-right.js";

class Landing extends Component {
  constructor() {
    super();
    this.state = { 
      visible: true,
      background: "background-earth",
      sidebarVisible: false,
      bodyOpacity: "opacity-90",
      views: 0,
    }
  }

  sidebarShow = () => this.setState({ sidebarVisible: true });
  sidebarHide = () => this.setState({ sidebarVisible: false });

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  selectWelcome() {
    this.props.history.replace("/");
    this.setState({background: "background-earth"});
  }

  selectProfile() {
    this.props.history.replace("/profile");
    this.setState({background: "background-robot"});
  }

  selectAbout() {
    this.props.history.replace("/about-me");
    this.setState({background: "background-castle"});
  }
  
  selectButtons() {
    this.props.history.replace("/buttons");
    this.setState({background: "background-wormhole"});
  }

  selectGallery() {
    this.props.history.replace("/gallery");
    this.setState({background: "background-hyperion"});
  }

  selectTechnical() {
    this.setState({ views: this.state.views + 1 });
    this.props.history.replace("/technical");
    this.setState({background: "background-clockwork"});
  }

  render() {
    return (
      <Sidebar.Pushable as={Segment} basic id="background" className={this.state.background}>
        <SidebarLeft 
          visible={this.state.sidebarVisible} 
          selectWelcome={this.selectWelcome.bind(this)}
          selectProfile={this.selectProfile.bind(this)}
          selectAbout={this.selectAbout.bind(this)}
          selectButtons={this.selectButtons.bind(this)}
          selectGallery={this.selectGallery.bind(this)}
          selectTechnical={this.selectTechnical.bind(this)}
          viewBackground={this.toggleVisibility.bind(this)}
        />

        <SidebarRight visible={this.state.sidebarVisible} />

        <Sidebar.Pusher>
          < Grid className="body-padding">
            <Grid.Column width={2}> </Grid.Column>
            <Transition visible={this.state.visible} animation='fade up' duration={500}>
              <Grid.Column width={12} onMouseLeave={this.sidebarShow.bind(this)} onMouseOver={this.sidebarHide.bind(this)} >
                <Grid.Row className="central-column" >
                  <Welcome/>
                </Grid.Row>
                <Grid.Row className="central-column" >
                  <Profile/>
                </Grid.Row>
                <Grid.Row className="central-column" >
                  <AboutMe/>
                </Grid.Row>
                <Grid.Row className="central-column" >
                  <Gallery/>
                </Grid.Row>
                <Grid.Row className="central-column" >
                  <Technical view={this.state.views} />
                </Grid.Row>
              </Grid.Column>
            </Transition>
            <Grid.Column width={2}></Grid.Column>
          </ Grid>
        </Sidebar.Pusher>
      </Sidebar.Pushable>  
    );
  }
}

export default Landing;
