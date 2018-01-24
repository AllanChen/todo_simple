import React from "react"
import { connect } from "react-redux"
import Footer from "../components/Footer"
import { completed, activeItem } from '../actions'
const mapStateToProps = () => ({

})

const mapDispatchToProps = (dispatch, ownProps) => ({
    showAll: id => {
        // dispatch(todoItemEdit(id,"EDITITEM_TODO"))
    },
    
    active: id => {        
        dispatch(activeItem())
    },

    completed: id => {
        dispatch(completed())
    }
})

const FooterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer)
export default FooterContainer
