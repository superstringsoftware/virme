import React,  { Component, PropTypes } from 'react';

// bootstrap 4 layout components

// Container
// props.fluid - if present, will be fluid. If you want fixed, don't include.
export class Container extends Component {
  constructor(props) {
    super(props);
    this.className = props.fluid ? "container-fluid" : "container";
  }

  render() {
    return (
      <div className={this.className}>
        {this.props.children}
      </div>
    );
  }
}

// Row is very basic
export class Row extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        {this.props.children}
      </div>
    );
  }
}

// Column needs a lot of work to customize, now very basic
export class Column extends Component {
  constructor(props) {
    super(props);
    this.className = "col";
    if (props.num) {
      this.className = this.className + "-" + props.num;
    }
  }

  render() {
    return (
      <div className={this.className}>
        {this.props.children}
      </div>
    );
  }
}
