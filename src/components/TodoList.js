import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'


export default class TodoList extends Component {
  render() {
    const { todos,actions } = this.props;
    return (      
      <p>
        {todos.map(todo =>
          <Todo
            key={todo.id}
            todo = {todo}
            {...actions}
          />
        )}
      </p>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}
