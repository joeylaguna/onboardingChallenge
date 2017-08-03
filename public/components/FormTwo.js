import React from 'react';
import { Link } from 'react-router-dom';

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
    this.props.completeFormTwo(this.state.firstName, this.state.lastName, this.state.phoneNumber);
  }

  render() {
    return(
      <div>
        <form>
          <label>
            First Name:
            <input type='text' value={this.state.firstName} onChange={this.handleFirstNameChange} />
          </label>

          <label>
            Last Name:
            <input type='text' value={this.state.lastName} onChange={this.handleLastNameChange} />
          </label>

          <label>
            Telephone Number:
            <input type='text' value={this.state.phoneNumber} onChange={this.handlePhoneNumberChange} />
          </label>
        </form>
        <Link to ='/formThree' onClick={this.handleFormTwoSubmit}>Form 3</Link>
      </div>
    )
  }
}

export default FormTwo;