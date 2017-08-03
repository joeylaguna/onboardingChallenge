import React from 'react';
import FormOne from './FormOne.js';
import Content from  './Content.js'
import LandingPage from './LandingPage.js';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import * as actionCreators from './../actions/actionCreators';

function mapStateToProps(state) {
  return {
    formOne: state.formOne,
    formTwo: state.formTwo,
    formThree: state.formThree
  }
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

var App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Content));

export default App;