import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { Button, Input } from 'semantic-ui-react'

let AddTodo = ({ dispatch }) => {
  let input
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>

        <div className="ui input fluid">
          <input type="text"
            placeholder="Add a to-do in here"
            ref={node => {
              input = node
            }}
            style={{ marginRight: "10px" }} />

          <Button size='big' type="submit">
            Add Todo
          </Button>
        </div>
      </form>
    </div>
  )

}
AddTodo = connect()(AddTodo)

export default AddTodo
