import React from 'react';
import { Link } from 'react-router-dom';

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
          <label>
            Address:
            <input type='text' value={this.state.address} onChange={this.handleAddressUpdate} />
          </label>
          <label>
            City:
            <input type='text'value={this.state.city} onChange={this.handleCityUpdate}/>
          </label>
          <label>
            State:
            <input type='text' value={this.state.state} onChange={this.handleStateUpdate}/>
          </label>
          <label>
            Zip:
            <input type='text' value={this.state.zip} onChange={this.handleZipUpdate}/>
          </label>
        </form>
        <Link to='/' onClick={this.handleFormThreeSubmit}>Finish</Link>
      </div>
    )
  }
}

export default FormThree;