import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextInput from './TextInput'

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { editing: false };
    this.handleToggleTodo = this.handleToggleTodo.bind(this);
  }

  handleDoubleClick = () => {
    this.setState({
      editing: true
    })
  }

  handleSave =(id,text)=>{    
    if(text.length === 0){
      
    } else{
        this.props.todoItemEdit(id,text)
      }        
      this.setState({
        editing : false
      })
  }

  handleToggleTodo = (id) =>{
    // console.log("Todo Item handleToggleTodo id is ",id)
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
        <div>
          <input type="checkbox" checked={todo.completed} onChange={this.handleToggleTodo(todo.id)} />
          <lable onDoubleClick={this.handleDoubleClick} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </lable>
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


