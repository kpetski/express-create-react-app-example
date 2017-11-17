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
        <h1 className="padding-small margin-bottom-tiny text-white bg-primary">Quotes</h1><br/>
      {this.state.data.map((message, index) => {
         return <p key={index}>{`"${message.text}" ~ ${message.name}`}</p>
      })}
      </div>
    );
  }
}

export default App;
