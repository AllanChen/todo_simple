let nextTodoId = 0

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId ++,
  text,
  date: new Date().toISOString().slice(0, 20)
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})


export const todoItemEdit = (id,text) =>({
  type:'EDITITEM_TODO',
  id,
  text
})

export const deletItem = (id) =>(
  {
    type:'DELETE_TODO_ITEM',
    id
  })

export const setMid = (id) =>({
  type: 'SET_SHOW_MID',
  id
})

export const setAreAllMark =(filter) =>({  
 type: filter
})

export const setAllUNMark =() =>({
 type:'UNCOMPLETE'
})

