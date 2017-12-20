import { connect } from 'react-redux'
import { toggleTodo, setShowEditArea, setHideEditArea,setMid } from '../actions'
import TodoList from '../components/TodoList'
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
        return todos
    case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) =>({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch,state) =>({
  onTodoClick: id => {
        dispatch(toggleTodo(id))
      },
  onEditClick: id =>{
    dispatch(setMid(id))
    if(state.editArea === "SHOW_EDITAREA"){      
      dispatch(setHideEditArea("HIDE_EDITAREA",id,state))
    }
    else{      
      dispatch(setShowEditArea("SHOW_EDITAREA",id,state))
    }
  }

})


const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
