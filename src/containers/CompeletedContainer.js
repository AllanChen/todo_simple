import React from 'react'
import {connect} from 'react-redux'
import CompeletedList from "../components/CompeletedList"

const filterCopeletedItem = (todos) =>{
    return todos.filter(todo => todo.completed === true);
}

const mapStateToProps = (state, ownProps) =>({
    compeletedTodoList : filterCopeletedItem(state.todos)
})

const mapDispatchToProps = (dispatch,ownProps) =>({
    active:id =>{
        dispatch()
    }    
})

const CompeletedContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CompeletedList)
export default CompeletedContainer