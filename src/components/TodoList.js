import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

export default class TodoList extends Component {
  render() {    
    const { todos, actions } = this.props;
    return (
      <div>
        {          
          todos.map(todo =>
          <Todo
            key={todo.id}
            todo={todo}
            {...actions}
          />
        )}
      </div>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}
