function formOne(state = {}, action) {
  switch(action.type) {
    case 'UPDATE_FORM_ONE':
      const username = action.username;
      const password = action.password;
      return Object.assign({}, state, {
        formOneComplete: true,
        username: username,
        password: password
      });
    default:
      return state;
  }
}
export default formOne;