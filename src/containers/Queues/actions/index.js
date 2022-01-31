import React, { Component } from 'react'

import { Get, Put, Post, Delete } from 'utils/axios'


const HOC = ( WrappedComponent ) => {
  class WithHOC extends Component {
    state = {
      queues: [],
    }

    load = param => this.setState({ loading: param })
    // requestError = error => toast.error( error )
    // requestSuccess = success => toast.success( success )

    onChangeTablesHOC = ( key, val ) => this.setState({ [ key ]: val })

    getIncompleteQueues = () => Get(
      '/api/queues/incomplete',
      this.getIncompleteQueuesSuccess,
      this.getIncompleteQueuesError,
      this.load
    )
    getIncompleteQueuesSuccess = payload => this.setState({ queues: payload })
    getIncompleteQueuesError = error => console.log( error )

  
    render = () => {
      return (
        <>
          <WrappedComponent
            { ...this.props }
            getIncompleteQueues={ this.getIncompleteQueues } 
            queues={ this.state.queues } />          
        </>
      )
    }
  }
  return WithHOC
}

export default HOC