import React, { Component } from 'react';

class Messages extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      fetching: true,
      spinner: 0
    }
  }

  componentDidMount() {
    this.setState ({
      spinner: 1,
      data: undefined
    })
    fetch('/messages')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          spinner: 0,
          data: json,
          fetching: false,
          isError: false
        });
      }).catch(e => {
        this.setState({
          spinner: 0,
          data: `API call failed: ${e}`,
          fetching: false,
          isError: true
        });
      })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        {(this.state.spinner === 0 && this.state.isError === false) && this.state.data.map((message, index) => {
          return <p key={index}>{`"${message.text}" ~ ${message.name}`}</p>
        })}
        {(this.state.spinner > 0) &&  //show spinner
          <div className="text-center"><span className="loading-indicator xlarge"></span></div>
        }
        {(this.state.isError === true) &&  //show error
          <div className="notification-box alert">{this.state.data}</div>
        }
      </div>
    );
  }
}

export default Messages;
