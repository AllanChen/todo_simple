import React, { Component } from "react"
import PropTypes from 'prop-types'
export default class TextInput extends Component{
    
    state = {
        text : this.props.text || ""
    }

    handleChange = e => {
        this.setState ({
            text : e.target.value
            })
        }

    handleSubmit = e => {
        if(e.target.value.lenght > 0 || e.which === 13){
            this.props.onSave(e.target.value)
        }
    }
    handleBlur = e =>{
        
    }


    render(){        
        return (
            <input 
            type="text" 
            placeholder="WTF" 
            value = {this.state.text}
            onChange = {this.handleChange}
            onBlur = {this.handleBlur}
            onKeyDown = {this.handleSubmit}
            />
        )        
    }
}

TextInput.PropTypes={
    text: PropTypes.string.isRequired,
    onSave: PropTypes.func 
}