function formTwo(state = {}, action) {
  switch(action.type) {
    case 'UPDATE_FORM_TWO':
      let firstName = action.firstName;
      let lastName = action.lastName;
      let phoneNumber = action.phoneNumber;
      return Object.assign({}, state, {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        formTwoComplete: true
      });
    default:
      return state;
  }
}

export default formTwo;