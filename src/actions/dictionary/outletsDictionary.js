import { get } from 'lodash'
import React, { Component } from 'react'


import { Get, Put, Post, Delete } from 'utils/axios'

const HOC = ( WrappedComponent ) => {
  class WithHOC extends Component {
    state = {
      loading: false,
      outletsDictionary: [],         
    }

    load = param => this.setState({ loading: param })
    

    getOutletsDictionary = () => Get(
      '/api/outlets/dictionary',
      this.getOutletsDictionarySuccess,
      this.getOutletsDictionaryError,
      this.load
    )
    getOutletsDictionarySuccess = payload => this.setState({ outletsDictionary: payload })
    getOutletsDictionaryError = error => console.log( error )

    
    
    render = () => {
      return (
        <>
          <WrappedComponent
            { ...this.props } 
            getOutletsDictionary={ this.getOutletsDictionary }
            outletsDictionary={ this.state.outletsDictionary } />          
        </>
      )
    }
  }
  return WithHOC
}

export default HOC