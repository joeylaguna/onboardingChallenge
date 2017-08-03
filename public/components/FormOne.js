import React from 'react';
import FormTwo from './FormTwo.js';
import { Link } from 'react-router-dom';

class FormOne extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      email: ''
    }
    this.handleUsernameUpdate = this.handleUsernameUpdate.bind(this);
    this.handlePasswordUpdate = this.handlePasswordUpdate.bind(this);
    this.handleEmailUpdate = this.handleEmailUpdate.bind(this);
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

  handleEmailUpdate(e) {
    this.setState({
      email: e.target.value
    })
  }
  
  handleFormOneSubmit() {
    let data = {};
    data.username = this.state.username;
    data.password = this.state.password;
    data.email = this.state.email;
    this.props.addToUsers(data);
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
            <label>
              Email:
              <input value={this.state.email} onChange={this.handleEmailUpdate} type='email'/>
            </label>
          </form>
          <Link to='/formTwo' onClick={this.handleFormOneSubmit}>Form Two</Link>
        </div>
    )
  }
}

export default FormOne;