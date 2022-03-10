import { get } from 'lodash'
import React, { Component } from 'react'
import PromptModal from 'components/indicator/prompt'
import { toast } from 'react-toastify';

import { Get, Put, Post, Delete } from 'utils/axios'

const HOC = ( WrappedComponent ) => {
  class WithHOC extends Component {
    state = {
      loading: false,
      users: [],         
      showCreateModal: false,
      newUser: {},
    }
    
    load = param => this.setState({ loading: param })
    
    onChangeUsersHOC = ( key, val ) => this.setState({ [ key ]: val })

    getUsers = () => Get(
      '/api/users',
      this.getUsersSuccess,
      this.getUsersError,
      this.load
    )
    getUsersSuccess = payload => this.setState({ users: payload })
    getUsersError = error => console.log( error )

    createUser = data => {
      Post(
        `/api/users`,
         data,
         this.createUserSuccess,
         this.createUserError, 
         this.load
      )
    }
    createUserSuccess = data => {
      this.getUsers()
      this.setState({ showCreateModal: false })
      toast.success("Successfully created")
    }
    createUserError = error => {      
      toast.error( error.message )
    }
      
    render = () => {
      return (
        <>
          <WrappedComponent
            { ...this.props } 
            createUser={ this.createUser }            
            newUser={ this.state.newUser }
            showCreateModal={ this.state.showCreateModal }
            onChangeUsersHOC={ this.onChangeUsersHOC}             
            users={ this.state.users }
            getUsers={ this.getUsers }/>          
        </>
      )
    }
  }
  return WithHOC
}

export default HOC