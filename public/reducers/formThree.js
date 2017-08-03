function formThree(state = {}, action) {
  switch(action.type) {
    case 'UPDATE_FORM_THREE':
      const address = action.address;
      const city = action.city;
      const userState = action.state;
      const zip = action.zip;
      return Object.assign({}, state, {
        formThreeComplete: true,
        address: address,
        city: city,
        state: userState,
        zip: zip
      });
    default:
      return state;
  }
}

export default formThree;