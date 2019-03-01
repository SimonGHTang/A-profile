import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Landing from "./components/landing";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Landing} />
      </BrowserRouter>
    );
  }
}

export default App;
