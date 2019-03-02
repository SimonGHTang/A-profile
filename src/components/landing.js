import React, { Component } from 'react';
import { Segment, Sidebar, Grid } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';
import '../App.css';

import Welcome from "./main/welcome.js";
import Profile from "./main/profile.js";
import Technical from "./main/technical.js";
import AboutMe from './main/about-me.js';

import SidebarLeft from "./sidebars/sidebar-left.js";
import SidebarRight from "./sidebars/sidebar-right.js";

class Landing extends Component {
  constructor() {
    super();
    this.state = { 
      background: "background-earth",
      sidebarVisible: true,
      backgroundView: false,
      bodyOpacity: "opacity-90",
    }
  }

  sidebarShow = () => this.setState({ sidebarVisible: true })
  sidebarHide = () => this.setState({ sidebarVisible: false })

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
          < Grid >
            <Grid.Column width={2}> </Grid.Column>
            <Grid.Column width={12} className={this.props.bodyOpacity} onMouseLeave={this.props.sidebarShow} onMouseOver={this.props.sidebarHide} >
              <div className="body-padding">
                <Switch>
                    <Route exact path="/" render = { props => <Welcome sidebarShow={this.sidebarShow.bind(this)} sidebarHide={this.sidebarHide.bind(this)} bodyOpacity={this.state.bodyOpacity} {...props} /> } />
                    <Route path="/profile" render = { props => <Profile sidebarShow={this.sidebarShow.bind(this)} sidebarHide={this.sidebarHide.bind(this)} bodyOpacity={this.state.bodyOpacity} {...props} /> } />
                    <Route path="/about-me" render = { props => <AboutMe sidebarShow={this.sidebarShow.bind(this)} sidebarHide={this.sidebarHide.bind(this)} bodyOpacity={this.state.bodyOpacity} {...props} /> } />
                    <Route path="/games" render = { props => <Welcome sidebarShow={this.sidebarShow.bind(this)} sidebarHide={this.sidebarHide.bind(this)} bodyOpacity={this.state.bodyOpacity} {...props} /> } />
                    <Route path="/gallery" render = { props => <Welcome sidebarShow={this.sidebarShow.bind(this)} sidebarHide={this.sidebarHide.bind(this)} bodyOpacity={this.state.bodyOpacity} {...props} /> } />
                    <Route path="/technical" render = { props =><Technical sidebarShow={this.sidebarShow.bind(this)} sidebarHide={this.sidebarHide.bind(this)} bodyOpacity={this.state.bodyOpacity} {...props}  /> } />
                </Switch>
              </div>
            </Grid.Column>
            <Grid.Column width={2}></Grid.Column>
          </ Grid>
        </Sidebar.Pusher>
      </Sidebar.Pushable>  
    );
  }
}

export default Landing;
