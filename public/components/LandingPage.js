import React from 'react';
import FormOne from './FormOne.js';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

class LandingPage extends React.Component {
  constructor() {
    super();
    this.testButton = this.testButton.bind(this);
  }

  testButton() {
    axios.get('/users/all')
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(`error: ${err}`);
      })
  }

  render() {
    return(
      <div>
        <h1>Click below to get started!</h1>
        <Link to='/formOne'><RaisedButton label='Get Started' primary={true} className='button'/></Link>
      </div>
    )
  }
}

export default LandingPage;