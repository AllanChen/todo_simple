import React from 'react'
import PropTypes from 'prop-types'
const EditArea = ({ todo,onClick }) => (
      <div style={{display: todo.show? 'block' : 'none'}}>
        <input type="hidden" value = {todo.id} name='ItemId'/>
        <input type="text" name="newText" placeholder = {todo.text}/>
        <button
            onClick = {() => onClick(todo.id)}
        >
            修改
        </button>
      </div>

)

EditArea.propTypes ={
    todo:PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
}
export default EditArea
