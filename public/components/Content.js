import React from 'react';
import App from './App.js';
import LandingPage from './LandingPage.js';
import FormOne from './FormOne.js';
import FormTwo from './FormTwo.js';
import FormThree from './FormThree.js';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

injectTapEventPlugin();

class Content extends React.Component {
  render() {
    return(
      <div className='container'>
        <MuiThemeProvider>
          <Router>
            <Card>
              <CardText>
                <Switch>
                  <Route exact path='/' render={(props) => (
                    <LandingPage {...this.props} />
                  )}/>
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
              </CardText>
            </Card>
          </Router>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default Content;