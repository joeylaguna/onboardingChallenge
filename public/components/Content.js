import React from 'react';
import App from './App.js';
import LandingPage from './LandingPage.js';
import FormOne from './FormOne.js';
import FormTwo from './FormTwo.js';
import FormThree from './FormTwo.js';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class Content extends React.Component {
  render() {
    return(
      <Router>
        <main>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path ='/formTwo' component={FormTwo} />
            <Route path ='/formThree' component={FormThree} />
          </Switch>
        </main>
      </Router>
    )
  }
}

export default Content;