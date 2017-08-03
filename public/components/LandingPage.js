import React from 'react';
import FormOne from './FormOne.js';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      completed: false
    }
  }

  render() {
    return(
      <div>
        {this.props.formTwo.firstName !== '' ? <h1>Welcome aboard, {this.props.formTwo.firstName}! </h1>: <h1>Click below to get started!</h1>}
        <Link to='/formOne'><RaisedButton label='Get Started' primary={true} className='button'/></Link>
      </div>
    )
  }
}

export default LandingPage;