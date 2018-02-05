import React, { Component } from "react"
import PropTypes from 'prop-types'
import { Segment, Header, Checkbox } from 'semantic-ui-react'
export default class Compeleted extends Component {
    constructor(props) {
        super(props)
        this.audio = new Audio("WLActivitySound.mp3");
    }
    handleActiveTodo = (id, compeleteTodo) => {
        this.props.activeItem(id)
        this.audio.play()
    }

    render() {
        const { compeleteTodo } = this.props
        return (
            <div>
                {
                    <Segment style={{ "margin-top": "10px" }}>
                        <div class="ui checkbox">
                            <input
                                type="checkbox"
                                className="hidden"
                                readonly=""
                                tabIndex="0"
                                checked={compeleteTodo.completed}
                                onChange={() => this.handleActiveTodo(compeleteTodo.id, compeleteTodo)}
                            />
                            <label style={{ textDecoration: compeleteTodo.completed ? 'line-through' : 'none', "fontSize": "20px", "paddingLeft": "10px" }}>{compeleteTodo.text}</label>
                        </div>
                        <p style={{ "color": "#d4d4d5", "paddingTop": "6px" }}>{compeleteTodo.date}</p>
                    </Segment>
                }
            </div>
        )
    }
}
Compeleted.propTypes = {
    compeleteTodo: PropTypes.object.isRequired,
    activeItem: PropTypes.func.isRequired
}