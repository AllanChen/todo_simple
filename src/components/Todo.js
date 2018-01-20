import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextInput from './TextInput'
import { Segment } from 'semantic-ui-react'
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
        <Segment  onDoubleClick={this.handleDoubleClick}>
          <div className="ui checkbox" style={{"float":"left"}}>
            <input type="checkbox" class="hidden" readonly="" tabindex="0" checked={todo.completed} onChange={() => this.handleToggleTodo(todo.id)} />          
            <label></label>
          </div>
          <div>
            <label style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</label>
            <label style={{ 'float':'right'}}>{todo.date}</label>
            <Header as='h6' >{todo.date}</Header>
            </div>
        </Segment>

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


