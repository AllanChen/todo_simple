import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as TodoActions from './actions'
import { bindActionCreators } from 'redux'
import THeader from './components/THeader'
import AddTodo from './containers/AddTodo'
import TodoList from './components/TodoList'
import TodosContainer from './containers/TodosContainer'
import FooterContainer from './containers/FooterContainer'
import CompeletedContainer  from './containers/CompeletedContainer'
import { Container,Divider} from 'semantic-ui-react'

const MainApp = ({todos, actions}) => (
  <Container text>
    <THeader />
    <AddTodo />
    <TodosContainer />
    <p> </p>
    <Divider horizontal>Compeleted</Divider>
    <CompeletedContainer  />
    <FooterContainer />
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
