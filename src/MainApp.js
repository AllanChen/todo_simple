import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as TodoActions from './actions'
import { bindActionCreators } from 'redux'
import AddTodo from './containers/AddTodo'
import TodoList from './components/TodoList'
import Footer from './components/Footer'

const MainApp = ({todos, actions}) => (
  <div>
    <AddTodo />
    <TodoList
      todos = {todos}
      actions = {actions}
    />
    <Footer />
  </div>
)

MainApp.Prototype = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainApp)
