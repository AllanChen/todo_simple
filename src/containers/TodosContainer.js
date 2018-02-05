import React from "react";
import {connect} from 'react-redux'
import TodoList from '../components/TodoList'
import {todoItemEdit, toggleTodo } from '../actions'
const filterCopeletedItem = (todos) =>{
    return todos.filter(todo => todo.completed === false);
}

const mapStateToProps = (state, ownProps) =>({
    todos: filterCopeletedItem(state.todos)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    toggleTodo: id=>{
        dispatch(toggleTodo(id))
    },
    
    todoItemEdit: (id,text)=>{
        dispatch(todoItemEdit(id,text))
    }
})

const TodosContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
export default TodosContainer