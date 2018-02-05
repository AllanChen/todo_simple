import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'

const Footer = ({showAll,active, completed}) => (
  <p style={{"margin-top":"10px"}}>

    <Button basic color='teal' onClick ={()=> showAll()} >All</Button>

    <Button basic color='teal' onClick ={()=> active()} >Active</Button>

    <Button basic color='teal' onClick ={() => completed()} >Completed</Button>
  </p>
)

Footer.propTypes ={  
  showAll: PropTypes.func.isRequired,
  active: PropTypes.func.isRequired,
  completed: PropTypes.func.isRequired  
}
export default Footer

