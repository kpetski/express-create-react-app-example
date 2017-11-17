import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Messages from './components/Messages'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Quotes"/>
        <br />
        <Messages />
      </div>
    );
  }
}

export default App;
