import React from 'react';
import FormTwo from './FormTwo.js';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

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
            <h1>Account Info</h1>
            <TextField value={this.state.username} onChange={this.handleUsernameUpdate} floatingLabelText='Username'/>
            <br/>
            <TextField value={this.state.password} onChange={this.handlePasswordUpdate} type='password' floatingLabelText='Password'/>
            <br/>
            <TextField value={this.state.email} onChange={this.handleEmailUpdate} floatingLabelText='Email'/>            
          </form>
          <Link to='/formTwo' onClick={this.handleFormOneSubmit}><RaisedButton label='Save' primary={true} /></Link>
        </div>
    )
  }
}

export default FormOne;