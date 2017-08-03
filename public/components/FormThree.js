import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class FormThree extends React.Component {
  constructor(){
    super();
    this.state = {
      address: '',
      city: '',
      state: '',
      zip: ''
    }
    this.handleAddressUpdate = this.handleAddressUpdate.bind(this);
    this.handleCityUpdate = this.handleCityUpdate.bind(this);
    this.handleStateUpdate = this.handleStateUpdate.bind(this);
    this.handleZipUpdate = this.handleZipUpdate.bind(this);
    this.handleFormThreeSubmit = this.handleFormThreeSubmit.bind(this);
  }

  handleAddressUpdate(e) {
    this.setState({
      address: e.target.value
    })
  }

  handleCityUpdate(e) {
    this.setState({
      city: e.target.value
    })
  }

  handleStateUpdate(e) {
    this.setState({
      state: e.target.value
    })
  }

  handleZipUpdate(e) {
    this.setState({
      zip: e.target.value
    })
  }

  handleFormThreeSubmit() {
    let obj = {};
    obj.address = this.state.address;
    obj.city = this.state.city;
    obj.state = this.state.state;
    obj.zip = this.state.zip;
    this.props.addFormThreeInfo(obj, this.props.formOne.id.data);
  }

  render() {
    return(
      <div>
        <form>
            <TextField value={this.state.address} onChange={this.handleAddressUpdate} floatingLabelText='Address' />
            <br/>
            <TextField value={this.state.city} onChange={this.handleCityUpdate} floatingLabelText='City' />
            <br/>
            <TextField value={this.state.state} onChange={this.handleStateUpdate} floatingLabelText='State' />
            <br/>
            <TextField value={this.state.zip} onChange={this.handleZipUpdate} floatingLabelText='Zip code' />
        </form>
        <Link to='/' onClick={this.handleFormThreeSubmit}><RaisedButton label='Save' primary={true} /></Link>
      </div>
    )
  }
}

export default FormThree;