import React from 'react';
import FormOne from './FormOne.js';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class LandingPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <h1>Click below to get started</h1>
        <Link to='/formOne'>Form One</Link>
      </div>
    )
  }
}

export default LandingPage;