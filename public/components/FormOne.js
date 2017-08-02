import React from 'react';
import FormTwo from './FormTwo.js';
import {
  BrowserRouter as Router, Route, Link
 } from 'react-router-dom';

class FormOne extends React.Component {
  render() {
    return(
        <div>
          Form One
          <Link to='/formTwo'>Form Two</Link>
        </div>
    )
  }
}

export default FormOne;