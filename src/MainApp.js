import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as TodoActions from './actions'
import { bindActionCreators } from 'redux'
import AddTodo from './containers/AddTodo'
import FooterContainer from './containers/FooterContainer'
import TodoList from './components/TodoList'
import THeader from './components/THeader'
import Footer from './components/Footer'
import { Container} from 'semantic-ui-react'
const MainApp = ({todos, actions}) => (
  <Container text>
    <THeader />
    <AddTodo />
    <TodoList
      todos = {todos}
      actions = {actions}
    />
    <Footer actions = {actions}/>
    {/* <FooterContainer actions = {actions} /> */}
  </Container>
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
