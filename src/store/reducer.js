const defaultState = {
  list: []
}

function rducer (state = defaultState, action) {
  switch (action.type) {
    case 'POST_DATA':
      console.log(action.data)
      return state
    default:
      return state
  }
}

export default rducer