import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextInput from './TextInput'
import Time from 'react-time-format'
import {Divider,Label, Segment, Header, Checkbox } from 'semantic-ui-react'

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { editing: false };
    this.audio = new Audio("ding.mp3");
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

  handleToggleTodo = (id, todo) => {
    this.props.toggleTodo(id)    
    if (!todo.completed)
      this.audio.play()
  }

  handleShowTheMenu = (id) =>{
    this.setState({
      isOpen: true
    })
  }
  

  render() {
    let element;
    const { onClick, todo, toggleTodo, actions } = this.props;
    if (this.state.editing) {
      element = <TextInput onSave={(inputText) => this.handleSave(todo.id, inputText)} text={todo.text} />
    }
    else {

      element =
        <Segment onDoubleClick={this.handleDoubleClick} style={{ "margin-top": "10px" }}>
        {/* // <Segment onClick={this.handleShowTheMenu(todo.id)} style={{ "margin-top": "10px" }}> */}
          <div class="ui checkbox">
            <input type="checkbox"
              className="hidden"
              readonly="" 
              tabIndex="0" 
              checked={todo.completed} 
              onChange = {() => this.handleToggleTodo(todo.id, todo)} />

            <label style={{ textDecoration: todo.completed ? 'line-through' : 'none', "fontSize": "20px", "paddingLeft": "10px" }}>{todo.text}</label>
          </div>
          <p style={{ "color": "#d4d4d5", "paddingTop": "6px" }}>{todo.date}</p>
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
  toggleTodo: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  todo: PropTypes.object.isRequired,
  todoItemEdit: PropTypes.func.isRequired
}


