import React from 'react';
import FormOne from './FormOne.js';
import Content from './Content';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './../actions/actionCreators';

function mapStateToProps(state) {
  return {
    formOne: false,
    formTwo: false
  }
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

var App = connect(mapStateToProps, mapDispatchToProps)(Content);

export default App;