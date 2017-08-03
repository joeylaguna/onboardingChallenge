import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';

const Profile = (props) => {
  console.log(props)
  let userName = `Username: ${props.formOne.username}`;
  let email = `Email: ${props.formOne.email}`;
  let name = `Name: ${props.formTwo.firstName} ${props.formTwo.lastName}`;
  let phone = `Phone Number: ${props.formTwo.phoneNumber}`;
  let address = `Address: ${props.formThree.address}`;
  let city = `City: ${props.formThree.city}`;
  let state = `State: ${props.formThree.state}`;
  let zip = `Zip: ${props.formThree.zip}`;
  return (
    <div>
      <List>
        <ListItem primaryText={userName} />
        <ListItem primaryText={email} />
        <ListItem primaryText={name} />
        <ListItem primaryText={phone} />
        <ListItem primaryText={address} />
        <ListItem primaryText={city} />
        <ListItem primaryText={state} />
        <ListItem primaryText={zip} />
      </List>
      <RaisedButton onClick={props.hideProfile} label='Close' primary={true} />
    </div>
  )
  
}

export default Profile;