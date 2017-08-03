import React from 'react';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class FormTwo extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: ''
    }
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handleFormTwoSubmit = this.handleFormTwoSubmit.bind(this);
  }

  handleFirstNameChange(e) {
    this.setState({
      firstName: e.target.value
    });
  }

  handleLastNameChange(e) {
    this.setState({
      lastName: e.target.value
    });
  }
  
  handlePhoneNumberChange(e){
    this.setState({
      phoneNumber: e.target.value
    });
  }
  
  handleFormTwoSubmit() {
    let obj = {};
    obj.firstName = this.state.firstName;
    obj.lastName = this.state.lastName;
    obj.phoneNumber = this.state.phoneNumber;
    this.props.addFormTwoInfo(obj, this.props.formOne.id.data);
  }

  render() {
    return(
      <div>
        <form>
          <h1>User Info</h1>
          <TextField value={this.state.firstName} onChange={this.handleFirstNameChange} floatingLabelText='First Name' />
          <br/>
          <TextField value={this.state.lastName} onChange={this.handleLastNameChange} floatingLabelText='Last Name' />
          <br/>
          <TextField value={this.state.phoneNumber} onChange={this.handlePhoneNumberChange} floatingLabelText='Phone Number' />
        </form>
        <Link to='/formThree' onClick={this.handleFormTwoSubmit}><RaisedButton label='Save' primary={true} /></Link>
      </div>
    )
  }
}

export default FormTwo;