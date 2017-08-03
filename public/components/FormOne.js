import React from 'react';
import FormTwo from './FormTwo.js';
import { Link } from 'react-router-dom';

class FormOne extends React.Component {
  componentDidMount() {
    console.log('fuck');
  }
  render() {
    return(
        <div>
          <Link to='/formTwo'>Form Two</Link>
        </div>
    )
  }
}

export default FormOne;