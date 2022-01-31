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

    clearQueues = (data) => {      
      Post(
        '/api/queues/clear_queues',
        data,
        this.clearQueuesSuccess,
        this.clearQueuesError,
        this.load
      )      
    }
    clearQueuesSuccess = payload => {      
      this.props.onChangeTablesHOC( 'showReservation', false )
      this.getIncompleteQueues()
      // this.setState({ 
      //   showReservation: false, 
      //   showPromptModal: true,
      //   reservationResult: payload,
      // })      
    }
    createReclearQueuesErrorservationError = error => {
      console.log(error)
    }

  
    render = () => {
      return (
        <>
          <WrappedComponent
            { ...this.props }
            clearQueues={ this.clearQueues }
            getIncompleteQueues={ this.getIncompleteQueues } 
            queues={ this.state.queues } />          
        </>
      )
    }
  }
  return WithHOC
}

export default HOC