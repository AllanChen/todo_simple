import React from 'react'
import PropTypes from 'prop-types'
const EditSpan = ({onEdit}) => (  
    <span onClick = {() =>onEdit()}>编辑</span>  
)
EditSpan.propTypes = {  
  onEdit: PropTypes.func.isRequired
}

export default EditSpan
