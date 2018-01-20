import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () =>(
  <p>
    Show:
    {" "}
    <FilterLink filter = "SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter = "UNCOMPLETE">
      Active
    </FilterLink>
    {", "}
    <FilterLink filter = "COMPLETE_ALL">
      Completed
    </FilterLink>
  </p>
)

export default Footer
