export function completeFormOne(username, password) {
  return {
    type: 'UPDATE_FORM_ONE',
    username,
    password
  }
}

export function completeFormTwo() {
  return {
    type: 'UPDATE_FORM_TWO'
  }
}