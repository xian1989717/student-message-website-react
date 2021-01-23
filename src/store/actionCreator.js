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
      type: 'SET_SELECT_STUDENT',
      data
    })
  }
}

const addStudentEvaluate = data => {
  return dispatch => {
    dispatch({
      type: 'ADD_STUDENT_EVALUATE',
      data
    })
  }
}

export {
  addStudentAction,
  activeStudentAction,
  addStudentEvaluate
}