let nextTodoId = 0

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId ++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

export const setShowEditArea = (editArea,id,state) =>({
  type: 'SHOW_EDITAREA',
  editArea,
  id
})

export const setHideEditArea = (editArea,id) =>({
  type: 'HIDE_EDITAREA',
  editArea,
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
