function formOne(state = [], action) {
  switch(action.type) {
    case 'UPDATE_FORM_ONE':
      return [...state, {
        formOneComplete: true
      }];
    default:
      return state;
  }
}
export default formOne;