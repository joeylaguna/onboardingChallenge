import axios from 'axios';

export function addToUsers(newStuff) {
  console.log(newStuff);
  return dispatch => {
    dispatch(addFormOneToDB(newStuff));
  }
}

export function addFormOneToDB(newStuff) {
  return dispatch => {
    let username = newStuff.username;
    let password = newStuff.password;
    let email = newStuff.email
    axios.post(`/addUsers/${username}/${password}/${email}`)
      .then((response) => {
        console.log(response);
        dispatch(getUserID(username, response.data, email));
      })
      .catch((err) => {
        console.log('got an error');
        console.log(err);
      })
  }
}

export function getUserID(username, password, email) {
  return dispatch => {
    axios.get(`/getUserID`)
      .then((response) => {
        dispatch(completeFormOne(username, password, response, email))
      });
  }
}

export function completeFormOne(username, password, id, email) {
  return {
    type: 'UPDATE_FORM_ONE',
    username,
    password,
    id,
    email
  }
}

export function addFormTwoInfo(newStuff, id) {
  return dispatch => {
    dispatch(addFormTwoInfoToDB(newStuff, id));
  }
}

export function addFormTwoInfoToDB(newStuff, id) {
  return dispatch => {
    let firstName = newStuff.firstName;
    let lastName = newStuff.lastName;
    let phoneNumber = newStuff.phoneNumber;
    axios.post(`/addFormTwo/${id}/${firstName}/${lastName}/${phoneNumber}`)
      .then((response) => {
        dispatch(completeFormTwo(firstName, lastName, phoneNumber));
      });
  }
}

export function completeFormTwo(firstName, lastName, phoneNumber) {
  return {
    type: 'UPDATE_FORM_TWO',
    firstName,
    lastName,
    phoneNumber
  }
}

export function addFormThreeInfo(newStuff, id) {
  return dispatch => {
    let address = newStuff.address;
    let city = newStuff.city;
    let state = newStuff.state;
    let zip = newStuff.zip;
    axios.post(`/addFormThree/${id}/${address}/${city}/${state}/${zip}`)
      .then((response) => {
        dispatch(completeFormThree(address, city, state, zip));
      });
  }
}

export function completeFormThree(address, city, state, zip) {
  return {
    type: 'UPDATE_FORM_THREE',
    address,
    city,
    state,
    zip
  }
}