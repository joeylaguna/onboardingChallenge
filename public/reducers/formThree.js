function formThree(state = [], action) {
  switch(action.type) {
    case 'UPDATE_FORM_THREE':
      return [...state, {
        formThreeComplete: true
      }];
    default:
      return state;
  }
}

export default formThree;