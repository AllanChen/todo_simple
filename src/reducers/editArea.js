const editArea = (state = 'HIDE_EDITAREA', action)=>{
  switch (action.type) {
    case 'SHOW_EDITAREA':
           return action.type
    case 'HIDE_EDITAREA':
          return action.type
    default:
      return state
  }
}

export default editArea
