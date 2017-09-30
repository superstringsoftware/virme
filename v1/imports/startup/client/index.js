// Import client startup through a single index entry point

//import './routes.js';

import { Meteor } from 'meteor/meteor';
import React,  { Component, PropTypes } from 'react';

import { render } from 'react-dom';
import App from '../../ui/App';
import Nav from '../../ui/components/Nav';
import Footer from '../../ui/components/Footer';

Meteor.startup(() => {
  //render(<Nav />, document.getElementById('header'));
  render(<App />, document.body);
  //render(<Footer />, document.getElementById('footer'));
});
