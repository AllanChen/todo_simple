import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Segment } from 'semantic-ui-react'
import Todo from './Todo'


export default class TodoList extends Component {
  render() {
    const { todos, actions } = this.props;
    return (
      <Segment.Group raised>
        {todos.map(todo =>
          <Todo
            key={todo.id}
            todo={todo}
            {...actions}
          />
        )}

      </Segment.Group>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}
