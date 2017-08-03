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
      phoneNumber: '',
      validPhoneNumber: false
    }
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handleFormTwoSubmit = this.handleFormTwoSubmit.bind(this);
    this.validatePhoneNumber = this.validatePhoneNumber.bind(this);
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
    this.validatePhoneNumber();
  }
  
  handleFormTwoSubmit() {
    let obj = {};
    obj.firstName = this.state.firstName;
    obj.lastName = this.state.lastName;
    obj.phoneNumber = this.state.phoneNumber;
    this.props.addFormTwoInfo(obj, this.props.formOne.id.data);
  }

  validatePhoneNumber() {
    var phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
    var digits = this.refs.phoneNumber.getValue().replace(/\D/g, "");
    console.log(phoneRe.test(digits));
    if (phoneRe.test(digits)) {
      this.setState({
        validPhoneNumber: true
      })
    } else {
      this.setState({
        validPhoneNumber: false
      })
    }
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
          <TextField ref='phoneNumber'value={this.state.phoneNumber} onChange={this.handlePhoneNumberChange} floatingLabelText='Phone Number' />
        </form>
        {this.state.validPhoneNumber && this.state.firstName.length > 0 && this.state.lastName.length > 0 ? <Link to='/formThree' onClick={this.handleFormTwoSubmit}><RaisedButton label='Save' primary={true} /></Link> : <RaisedButton label="Save" disabled={true} />}
      </div>
    )
  }
}

export default FormTwo;