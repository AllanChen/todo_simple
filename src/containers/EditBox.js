import React from 'react'
import { connect } from 'react-redux'
import EditArea from '../components/EditArea'
import {setShowEditArea, setHideEditArea,todoItemEdit } from '../actions'
const displayEditArea = (todos,showType,id) => {
  switch (showType) {
    case 'SHOW_EDITAREA':   
      return todos.filter(todo => todo.id === id)[0]
    default:
      return {}
  }
}

const mapStateToProps = (state, ownProps) =>({
    todo: displayEditArea(state.todos,state.editArea,state.mid)
})

const mapDispatchToProps = (dispatch, ownProps) =>({
  onClick:id =>{
    dispatch(todoItemEdit(id,"EDITITEM_TODO")),
    dispatch(setHideEditArea("HIDEN_EDITAREA",id))
  }
})

const EditBox = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditArea)
export default EditBox
