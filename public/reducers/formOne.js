function formOne(state = {}, action) {
  switch(action.type) {
    case 'UPDATE_FORM_ONE':
    console.log(state);
    return Object.assign({}, state, {
      formOneComplete: true
    });
    default:
      console.log('in here');
      return state;
  }
}
export default formOne;