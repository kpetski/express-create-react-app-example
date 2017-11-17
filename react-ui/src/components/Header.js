import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
          <h1 className="padding-small margin-bottom-tiny text-white bg-primary">{this.props.title}</h1>
      </div>
    );
  }
}

export default Header;
