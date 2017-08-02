import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class LandingPage extends React.Component {
  render() {
    return(
      <div>
        Landing Page
        <Link to='/formTwo'>Get Started</Link>
      </div>
    )
  }
}

export default LandingPage;