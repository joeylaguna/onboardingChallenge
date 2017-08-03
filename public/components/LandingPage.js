import React from 'react';
import FormOne from './FormOne.js';
import Profile from './Profile.js';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    }
    this.showProfile = this.showProfile.bind(this);
    this.hideProfile = this.hideProfile.bind(this);
  }
  showProfile(){
    this.setState({
      clicked: true
    });
  }

  hideProfile() {
    this.setState({
      clicked: false
    });
  }

  render() {
    return(
      <div>
        {this.props.formTwo.firstName !== '' && this.props.formThree.formThreeComplete ? <h1>Welcome aboard, {this.props.formTwo.firstName}! </h1>: <h1>Click below to get started!</h1>}
        {this.props.formTwo.firstName !== '' && this.props.formThree.formThreeComplete ? <RaisedButton label='View Profile' primary={true} onClick={this.showProfile}/> : <Link to='/formOne'><RaisedButton label='Get Started' primary={true} className='button'/></Link> }
        {this.state.clicked ? <Profile {...this.props} hideProfile={this.hideProfile}/> : ''}
      </div>
    )
  }
}

export default LandingPage;