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
import CompeletedContainer from './containers/CompeletedContainer'
import { Container, Divider,Button } from 'semantic-ui-react'
import { slide as Menu } from 'react-burger-menu'

var isMenuOpen = function(state) {
  return state.isOpen;
};

const MainApp = ({ todos, actions }) => (
  <Container text>
  
    <Menu onStateChange={ isMenuOpen } width={ '40%' }>
    {/* <a id="Normal" className="menu-item" href="/">Normal</a>
    <a id="Private" className="menu-item" href="/">Private</a>
    <a id="Wepet" className="menu-item" href="/">Wepet</a> */}
    <Button.Group vertical>
    <Button>Normal</Button>
    <Button>Private</Button>
    <Button>Wepet</Button>
  </Button.Group>
    </Menu>

    <THeader />
    <AddTodo />
    <TodosContainer />
    <p> </p>
    <Divider horizontal>Compeleted</Divider>
    <CompeletedContainer />
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
