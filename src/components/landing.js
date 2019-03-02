import React, { Component } from 'react';
import { Segment, Sidebar, Grid } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';
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
      background: "background-earth",
      sidebarVisible: false,
      bodyOpacity: "opacity-90",
      views: 0,
    }
  }

  sidebarShow = () => this.setState({ sidebarVisible: true });
  sidebarHide = () => this.setState({ sidebarVisible: false });

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
  
  selectGames() {
    this.props.history.replace("/games");
    this.setState({background: "background-hyperion"});
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

  viewBackground() {
    this.state.bodyOpacity === "opacity-90" ? this.setState({bodyOpacity: "opacity-0"}) : this.setState({bodyOpacity: "opacity-90"});
  }

  render() {
    return (
      <Sidebar.Pushable as={Segment} basic id="background" className={this.state.background}>
        <SidebarLeft 
          visible={this.state.sidebarVisible} 
          selectWelcome={this.selectWelcome.bind(this)}
          selectProfile={this.selectProfile.bind(this)}
          selectAbout={this.selectAbout.bind(this)}
          selectGames={this.selectGames.bind(this)}
          selectGallery={this.selectGallery.bind(this)}
          selectTechnical={this.selectTechnical.bind(this)}
          viewBackground={this.viewBackground.bind(this)}
        />
          
        <SidebarRight visible={this.state.sidebarVisible} />
        <Sidebar.Pusher>
          < Grid className="body-padding">
            <Grid.Column width={2}> </Grid.Column>
            <Grid.Column width={12} className={this.state.bodyOpacity} onMouseLeave={this.sidebarShow.bind(this)} onMouseOver={this.sidebarHide.bind(this)} >
              <Switch>
                  <Route exact path="/" render = { props => <Welcome {...props} /> } />
                  <Route path="/profile" render = { props => <Profile {...props} /> } />
                  <Route path="/about-me" render = { props => <AboutMe {...props} /> } />
                  <Route path="/games" render = { props => <Welcome {...props} /> } />
                  <Route path="/gallery" render = { props => <Gallery {...props} /> } />
                  <Route path="/technical" render = { props =><Technical views={this.state.views} {...props} /> } />
              </Switch>
            </Grid.Column>
            <Grid.Column width={2}></Grid.Column>
          </ Grid>
        </Sidebar.Pusher>
      </Sidebar.Pushable>  
    );
  }
}

export default Landing;
