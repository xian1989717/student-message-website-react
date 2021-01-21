const addStudentAction = data => {
  return dispatch => {
    // ajax
    dispatch({
      type: 'POST_DATA',
      data
    })
  }
}

export {
  addStudentAction
}