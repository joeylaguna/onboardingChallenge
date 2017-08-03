import React from 'react';
import App from './App.js';
import LandingPage from './LandingPage.js';
import FormOne from './FormOne.js';
import FormTwo from './FormTwo.js';
import FormThree from './FormThree.js';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class Content extends React.Component {
  render() {
    return(
      <Router>
        <main>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/formOne' render={(props) => (
              <FormOne {...this.props} />
            )}/>
            <Route path='/formTwo' render={(props) => (
              <FormTwo {...this.props} />
            )}/>
            <Route path='/formThree' render={(props) => (
              <FormThree {...this.props} />
            )}/>
          </Switch>
        </main>
      </Router>
    )
  }
}

export default Content;