const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]

    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ?
         { ...todo, completed: !todo.completed }
          : todo
      )
      

    case 'SHOW_EDITAREA':
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, show: !todo.show }
          : todo
      )
    case 'HIDEN_EDITAREA':
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, show: !todo.show }
          : todo
      )

    case 'EDITITEM_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, text: action.text }
          : todo
      )

    case 'DELETE_TODO_ITEM':
      return state.filter(todo =>
        todo.id !== action.id
      )
      
    case 'COMPLETE_ALL':    
    const areAllMarked = state.every(todo => todo.completed)
    return state.map(todo =>({
      ...todo,
      completed: !areAllMarked
    }))

    case 'UNCOMPLETE':
      return state.filter(todo => todo.completed === false)
    //return state.filter(todo => todo.completed === false)

    default:
      return state
  }
}

export default todos
