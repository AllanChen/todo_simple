import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import FilterLink from '../containers/FilterLink'
import FooterContainer from '../containers/FooterContainer'
import PropTypes from 'prop-types'
export default class Footer extends Component {
  render() {
    return (
      <p>
        Show:
        
        {/* <FilterLink filter="SHOW_ALL"> */}
        <Button basic> All</Button>          
        
        {/* <FilterLink filter="UNCOMPLETE">
          Active
    </FilterLink> */}
    {/* <Button basic onClick = {dispatch(setAreAllMark)}>Active</Button>           */}
        
        {/* <FilterLink filter="COMPLETE_ALL">
          Completed
    </FilterLink> */}    
    <FooterContainer>
    {/* <Button basic onClick = {this.props.setAreAllMark()}>Completed</Button>           */}
    </FooterContainer>
      </p>
    )
  }
}
Footer.protoType = {
  actions : PropTypes.object.isRequired
}