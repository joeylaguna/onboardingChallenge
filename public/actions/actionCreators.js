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
    axios.post(`/addUsers/${username}/${password}`)
      .then((response) => {
        dispatch(getUserID(username, password));
      })
      .catch((err) => {
        console.log('got an error');
        console.log(err);
      })
  }
}

export function getUserID(username, password) {
  return dispatch => {
    axios.get(`/getUserID`)
      .then((response) => {
        dispatch(completeFormOne(username, password, response))
      });
  }
}

export function completeFormOne(username, password, id) {
  return {
    type: 'UPDATE_FORM_ONE',
    username,
    password,
    id
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