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
      email: '',
      validEmail: false
    }
    this.handleUsernameUpdate = this.handleUsernameUpdate.bind(this);
    this.handlePasswordUpdate = this.handlePasswordUpdate.bind(this);
    this.handleEmailUpdate = this.handleEmailUpdate.bind(this);
    this.handleFormOneSubmit = this.handleFormOneSubmit.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
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
    });
    this.validateEmail();
  }
  
  handleFormOneSubmit() {
    let data = {};
    data.username = this.state.username;
    data.password = this.state.password;
    data.email = this.state.email;
    this.props.addToUsers(data);
  }

  validateEmail() {  
    const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (this.refs.email.getValue().match(format)){  
      this.setState({
        validEmail: true
      });
    } else {
      this.setState({
        validEmail: false
      })
    }
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
            <TextField ref='email' value={this.state.email} onChange={this.handleEmailUpdate} floatingLabelText='Email'/>            
          </form>
          {this.state.validEmail && this.state.username.length > 0 && this.state.password.length > 0? <Link to='/formTwo' onClick={this.handleFormOneSubmit}><RaisedButton label='Save' primary={true} /></Link> : <RaisedButton label="Save" disabled={true} />}
        </div>
    )
  }
}

export default FormOne;