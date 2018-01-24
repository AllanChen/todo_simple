let nextTodoId = 0

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text,
  date: new Date().toISOString().slice(0, 19)
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})


export const todoItemEdit = (id, text) => ({
  type: 'EDITITEM_TODO',
  id,
  text
})

export const deletItem = (id) => (
  {
    type: 'DELETE_TODO_ITEM',
    id
  })

export const completed = (filter) => ({
  type: 'COMPLETED'
})

export const activeItem = () => ({
  type: 'ACTIVE'
})

