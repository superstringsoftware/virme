import React,  { Component, PropTypes } from 'react';

// main App layout
export default class Footer extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log("Rendering footer");
    return (
      <nav className="navbar fixed-bottom navbar-light bg-light">
        <a className="navbar-brand" href="#">Fixed bottom</a>
      </nav>
    );
  }
}
