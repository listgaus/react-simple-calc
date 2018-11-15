import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from "./components/container";


class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <Container/>
      </div>
    );
  }
}

export default App;
