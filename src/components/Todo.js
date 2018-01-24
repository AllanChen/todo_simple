import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextInput from './TextInput'
<<<<<<< HEAD
import { Segment, Divider } from 'semantic-ui-react'
import Time from 'react-time-format'
=======
import { Segment, Header, Checkbox } from 'semantic-ui-react'
import Label from 'semantic-ui-react/dist/commonjs/elements/Label/Label';
>>>>>>> 2f4a8cc7199c8524a1c3d2215b3b216d6cf99403

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


  render() {
    let element;
    const { onClick, todo, toggleTodo } = this.props;
    if (this.state.editing) {
      element = <TextInput onSave={(inputText) => this.handleSave(todo.id, inputText)} text={todo.text} />
    }
    else {

      element =
        <Segment onDoubleClick={this.handleDoubleClick} style={{ "margin-top": "10px" }}>
          <div class="ui checkbox">
            {/* <input type="checkbox" className="hidden" readonly="" tabIndex="0" checked={todo.completed} onChange={() => this.handleToggleTodo(todo.id,todo)} />                       */}
            <input type="checkbox"
              className="hidden"
              readonly="" 
              tabIndex="0" 
              checked={todo.completed} 
              onChange={() => toggleTodo(todo.id)} />

            <label style={{ textDecoration: todo.completed ? 'line-through' : 'none', "fontSize": "20px", "paddingLeft": "10px" }}>{todo.text}</label>
          </div>
          <p style={{ "color": "#d4d4d5", "paddingTop": "6px" }}>{todo.date}</p>
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
  toggleTodo: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  todo: PropTypes.object.isRequired,
  todoItemEdit: PropTypes.func.isRequired

}


