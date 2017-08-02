import React from 'react';
import FormOne from './FormOne.js';
import Content from './Content';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return(
      <Router>
        <div>
          <Content/>
        </div>
      </Router>
    )
  }
}

export default App;