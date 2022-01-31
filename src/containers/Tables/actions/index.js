import React, { Component } from 'react'
// import { toast } from 'react-toastify'

import { Get, Put, Post, Delete } from 'utils/axios'


const HOC = ( WrappedComponent ) => {
  class WithHOC extends Component {
    state = {
      loading: false,
      tables: [],
      
    }

    load = param => this.setState({ loading: param })
    // requestError = error => toast.error( error )
    // requestSuccess = success => toast.success( success )

    onChangeTablesHOC = ( key, val ) => this.setState({ [ key ]: val })

    getTables = () => Get(
      '/api/tables',
      this.getTablesSuccess,
      this.getTablesError,
      this.load
    )
    getTablesSuccess = payload => this.setState({ Tables: payload })
    getTablesError = error => this.requestError( error )

    getSelectedTable = id => Get(
      `/api/Tables/${ id }`,
      this.getSelectedTableSuccess,
      this.getSelectedTableError,
      this.load
    )
    getSelectedTableSuccess = payload => this.setState({ selectedTable: {
      ...payload,
      dob: payload.dob ? payload.dob : ''
    }, showUpdateTable: true })
    getSelectedTableError = error => this.requestError( error )

    createTable = data => Post(
      `/api/Tables`,
      data,
      this.createTableSuccess,
      this.createTableError,
      this.load
    )    
    createTableSuccess = payload => {
      this.requestSuccess( 'Table is created successfully.' )
      this.setState({ 
        showCreateTable: false,
        newTable: {},
        TableError: {}, 
      })
      this.getTables()
    }
    createTableError = error => {
      if( typeof( error ) === 'string' ) {
        this.requestError( error )
      } else {
        this.setState({ TableError: error })
      }
    }

    render = () => {
      return (
        <>
          <WrappedComponent
            { ...this.props }
            getTables={ this.getTables}
            tables={ this.state.tables } />
          {/* <PromptModal
            showPromptModal={ this.state.showPromptModal }
            onClickYes={() => this.removeTable( this.state.toRemoveID )}
            onClickNo={() => this.setState({ showPromptModal: false })}
            content={ 'Are you sure you want to delete the record?' } /> */}
        </>
      )
    }
  }
  return WithHOC
}

export default HOC