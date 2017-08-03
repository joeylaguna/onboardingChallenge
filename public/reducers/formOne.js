function formOne(state = {}, action) {
  switch(action.type) {
    case 'UPDATE_FORM_ONE':
      const username = action.username;
      const password = action.password;
      let id = action.id
      return Object.assign({}, state, {
        formOneComplete: true,
        username: username,
        password: password,
        id: action.id
      });
    default:
      return state;
  }
}
export default formOne;