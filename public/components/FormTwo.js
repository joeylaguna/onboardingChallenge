import React from 'react';
import { Link } from 'react-router-dom';

class FormTwo extends React.Component {
  render() {
    return(
      <div>
        <Link to ='/formThree'>Form 3</Link>
      </div>
    )
  }
}

export default FormTwo;