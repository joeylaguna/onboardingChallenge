function formOne(state = {}, action) {
  switch(action.type) {
    case 'UPDATE_FORM_ONE':
      const username = action.username;
      const password = action.password;
      const email = action.email;
      let id = action.id
      return Object.assign({}, state, {
        formOneComplete: true,
        username: username,
        password: password,
        id: action.id,
        email: email
      });
    case 'FAIL_FORM_ONE':
      return state;
    default:
      return state;
  }
}
export default formOne;