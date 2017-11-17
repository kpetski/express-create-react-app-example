import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      fetching: true
    }
  }

  componentDidMount() {
    fetch('/messages')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          data: json,
          fetching: false
        });
      }).catch(e => {
        this.setState({
          data: `API call failed: ${e}`,
          fetching: false
        });
      })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        
      {this.state.data.map((message, index) => {
         return <p key={index}>{message.text}</p>
      })}
      </div>
    );
  }
}

export default App;
