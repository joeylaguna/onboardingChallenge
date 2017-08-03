function formTwo(state = [], action) {
  switch(action.type) {
    case 'UPDATE_FORM_TWO':
      return [...state, {
        formTwoComplete: true
      }];
    default:
      return state;
  }
}

export default formTwo;