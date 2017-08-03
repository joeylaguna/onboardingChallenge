import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class LandingPage extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('in click');
    this.props.completeFormOne();
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick}>t</button>
      </div>
    )
  }
}

export default LandingPage;