import React, { Component } from "react"
import PropTypes from 'prop-types'
import Compeleted from "./Compeleted"
export default class CompeletedList extends Component {
    render() {
        const {compeletedTodoList, actions} = this.props;
        return (
            <div>
                {compeletedTodoList.map( compeleted => <Compeleted
                    key = {compeletedTodoList.id}
                    compeleteTodo = {compeleted}
                    {...actions}
                 />                    
                )}
                
            </div>
        )
    }
}

CompeletedList.propTypes = {
    compeletedTodoList: PropTypes.array.isRequired,
    actions :  PropTypes.object.isRequired
}