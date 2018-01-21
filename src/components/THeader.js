import React, { Component } from 'react'
import { Header,Icon } from 'semantic-ui-react'
export default class THeader extends Component {
    render() {
        return(
        <div>
            <Header as='h2' icon textAlign='center'>
            <Icon name='users' circular />
            <Header.Content>
              To-do-List
            </Header.Content>
          </Header>
        </div>
        )}
}