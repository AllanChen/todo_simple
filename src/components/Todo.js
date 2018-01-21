import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextInput from './TextInput'
import { Segment, Divider } from 'semantic-ui-react'
import Time from 'react-time-format'

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { editing: false };
  }

  handleDoubleClick = () => {
    this.setState({
      editing: true
    })
  }

  handleSave = (id, text) => {
    if (text.length === 0) {

    } else {
      this.props.todoItemEdit(id, text)
    }
    this.setState({
      editing: false
    })
  }

  handleToggleTodo = (id) => {
    this.props.toggleTodo(id)
  }


  render() {
    let element;
    const { onClick, todo } = this.props;
    if (this.state.editing) {
      element = <TextInput onSave={(inputText) => this.handleSave(todo.id, inputText)} text={todo.text} />
    }
    else {

      element =
        <div className="p_todo_item">
          <Segment onDoubleClick={this.handleDoubleClick}>
            <div className="ui checkbox">
              <input type="checkbox" class="hidden" readonly="" tabindex="0" checked={todo.completed} onChange={() => this.handleToggleTodo(todo.id)} />
              <label style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text} {todo.date}</label>
            </div>
          </Segment>          
        </div>
    }
    return (
      <div>
        {element}
      </div>
    )
  }
}

Todo.propTypes = {
  onClick: PropTypes.func,
  todo: PropTypes.object.isRequired,
  todoItemEdit: PropTypes.func.isRequired
}


