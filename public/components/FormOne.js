import React from 'react';
import FormTwo from './FormTwo.js';
import { Link } from 'react-router-dom';

class FormOne extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
    this.handleUsernameUpdate = this.handleUsernameUpdate.bind(this);
    this.handlePasswordUpdate = this.handlePasswordUpdate.bind(this);
    this.handleFormOneSubmit = this.handleFormOneSubmit.bind(this);
  }
  handleUsernameUpdate(e) {
    this.setState({
      username: e.target.value
    });
  }

  handlePasswordUpdate(e) {
    this.setState({
      password: e.target.value
    })
  }
  
  handleFormOneSubmit() {
    this.props.completeFormOne(this.state.username, this.state.password);
  }

  render() {
    return(
        <div>
          <form>
            <label>
              Username:
              <input value={this.state.username} onChange={this.handleUsernameUpdate} type='text'/>
            </label>
            <label>
              Password:
              <input value={this.state.password} onChange={this.handlePasswordUpdate} type='password'/>
            </label>
          </form>
          <Link to='/formTwo' onClick={this.handleFormOneSubmit}>Form Two</Link>
        </div>
    )
  }
}

export default FormOne;