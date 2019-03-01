import React, { Component } from 'react';
import { Segment, Sidebar } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';
import '../App.css';

import Welcome from "./main/welcome.js";
import SidebarLeft from "./sidebars/sidebar-left.js";
import SidebarRight from "./sidebars/sidebar-right.js";

class Landing extends Component {
  constructor() {
    super();
    this.state = { 
      background: "background-earth",
      sidebarVisible: true,
      backgroundView: false,
      page: ""
    }
  }

  sidebarShow = () => this.setState({ sidebarVisible: true })
  sidebarHide = () => this.setState({ sidebarVisible: false })

  selectWelcome() {
    this.props.history.replace("/");
    this.setState({background: "background-earth"});
  }

  selectAbout() {
    this.props.history.replace("/about-me");
    this.setState({background: "background-castle"});
  }

  selectProfile() {
    this.props.history.replace("/profile");
    this.setState({background: "background-robot"});
  }
  
  selectGames() {
    this.props.history.replace("/games");
    this.setState({background: "background-hyperion"});
  }

  selectBackgrounds() {
    this.props.history.replace("/backgrounds");
  }

  render() {
    return (
      <Sidebar.Pushable as={Segment} basic id="background" className={this.state.background}>
        <SidebarLeft 
          visible={this.state.sidebarVisible} 
          selectWelcome={this.selectWelcome.bind(this)}
          selectAbout={this.selectAbout.bind(this)}
          selectProfile={this.selectProfile.bind(this)}
          selectGames={this.selectGames.bind(this)}
          selectBackgrounds={this.selectBackgrounds.bind(this)} 
        />
          
        <SidebarRight visible={this.state.sidebarVisible} />
        <Sidebar.Pusher>
            <Switch>
                <Route exact path="/" render = { props => <Welcome className="main" sidebarShow={this.sidebarShow.bind(this)} sidebarHide={this.sidebarHide.bind(this)} {...props} /> } />
                <Route exact path="/about-me" render = { props => <Welcome className="main" sidebarShow={this.sidebarShow.bind(this)} sidebarHide={this.sidebarHide.bind(this)} {...props} /> } />
                <Route exact path="/profile" render = { props => <Welcome className="main" sidebarShow={this.sidebarShow.bind(this)} sidebarHide={this.sidebarHide.bind(this)} {...props} /> } />
                <Route exact path="/games" render = { props => <Welcome className="main" sidebarShow={this.sidebarShow.bind(this)} sidebarHide={this.sidebarHide.bind(this)} {...props} /> } />
                <Route exact path="/backgrounds" render = { props => <Welcome className="main" sidebarShow={this.sidebarShow.bind(this)} sidebarHide={this.sidebarHide.bind(this)} {...props} /> } />
            </Switch>
        </Sidebar.Pusher>
      </Sidebar.Pushable>  
    );
  }
}

export default Landing;
