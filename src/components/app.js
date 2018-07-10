import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="grid">
        <div className="grid__skew-dark-one-box"></div>
        <div className="grid__skew-dark-two"></div>
        <div className="grid__skew-dark-three"></div>
        <div></div>
        <div></div>
        <div className="grid__skew-light-one"></div>

      </div>
    );
  }
}
