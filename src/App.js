import React, { Component } from 'react';
import { Grid, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { visible: true }

  }

  handleHide = () => this.setState({ visible: false })
  handleShow = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    return (
      <div class="max-width">
            <Sidebar
              as={Menu}
              animation='overlay'
              direction='left'
              icon='labeled'
              inverted
              vertical
              visible={this.state.visible}
              onMouseOver={this.handleShow} onMouseLeave={this.handleHide}
              width='thin'
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
            </Sidebar>

          
            <Sidebar.Pusher onMouseOver={this.handleShow} onMouseLeave={this.handleHide}>
              <Segment basic>
                <Header as='h3'>Application Content</Header>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Edit <code>src/App.js</code> and save to reload.</p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </Segment>
          </Sidebar.Pusher>

          
            <Sidebar
              as={Menu}
              animation='overlay'
              direction='right'
              inverted
              vertical
              onMouseOver={this.handleShow} onMouseLeave={this.handleHide}
              visible={this.state.visible}
            >
              <Menu.Item as='a' header>
                File Permissions
              </Menu.Item>
              <Menu.Item as='a'>Share on Social</Menu.Item>
              <Menu.Item as='a'>Share by E-mail</Menu.Item>
              <Menu.Item as='a'>Edit Permissions</Menu.Item>
              <Menu.Item as='a'>Delete Permanently</Menu.Item>
            </Sidebar>
      </div>
          
    );
  }
}

export default App;
