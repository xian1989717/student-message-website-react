const addStudentAction = data => {
  return dispatch => {
    // ajax
    dispatch({
      type: 'POST_DATA',
      data
    })
  }
}

const activeStudentAction = data => {
  return dispatch => {
    dispatch({
      type:'SET_SELECT_STUDENT',
      data
    })
  }
}

export {
  addStudentAction,
  activeStudentAction
}