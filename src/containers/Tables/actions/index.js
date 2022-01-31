import { get } from 'lodash'
import React, { Component } from 'react'
import PromptModal from 'components/Indicator/Prompt'
import ReservationResult  from '../components/ReservationResult'

import { Get, Put, Post, Delete } from 'utils/axios'


const HOC = ( WrappedComponent ) => {
  class WithHOC extends Component {
    state = {
      loading: false,
      tables: [],
      newTables: {},        
      selectedTable: {},
      chairReservation: {},
      showCreateTable: false,
      showReservation: false,
      availableChairs: [],
      reservationResult: [],
      showPromptModal: false,
      selectedChairsToCheckout: [],
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
    getTablesSuccess = payload => this.setState({ tables: payload })
    getTablesError = error => console.log( error )

    getSelectedTable = id => Get(
      `/api/tables/${ id }`,
      this.getSelectedTableSuccess,
      this.getSelectedTableError,
      this.load
    )
    getSelectedTableSuccess = payload => this.setState({ selectedTable: {
      ...payload,      
    }, showUpdateTable: true })
    getSelectedTableError = error => this.requestError( error )

    createTables = data => Post(
      `/api/tables/by_quantity`,
      data,
      this.createTablesSuccess,
      this.createTablesError,
      this.load
    )    
    createTablesSuccess = payload => {
      // this.requestSuccess( 'Table is created successfully.' )
      this.setState({ 
        showCreateTable: false,
        newTable: {},         
      })
      this.getTables()
    }
    createTablesError = error => {
      if( typeof( error ) === 'string' ) {
        this.requestError( error )
      } else {
        this.setState({ TableError: error })
      }
    }

    checkAvailableTables = () => {
      Get(
        '/api/tables/check_available_tables',
        this.checkAvailableTablesSuccess,
        this.checkAvailableTablesError,
        this.load,
      )
    }
    checkAvailableTablesSuccess = payload => {
      this.setState({
        showReservation: true, 
        availableChairs: payload, 
      })      
    }
    checkAvailableTablesError = error => {
      console.log(error)
    }

    createReservation = (data) => {      
      Post(
        '/api/chairs/reserve',
        data,
        this.createReservationSuccess,
        this.createReservationError,
        this.load
      )      
    }
    createReservationSuccess = payload => {
      console.log(payload)
      this.setState({ 
        showReservation: false, 
        showPromptModal: true,
        reservationResult: payload,
      })      
    }
    createReservationError = error => {
      console.log(error)
    }

    checkoutChairs = data => {
      Post(
        '/api/chairs/checkout',
        data,
        this.checkoutChairsSuccess,
        this.checkoutChairsError,
        this.load
      )
    }
    checkoutChairsSuccess = () => {
      this.getSelectedTable( this.state.selectedTable._id )
      this.getTables()
    }
    checkoutChairsError = (error) => {
      console.log(error)
    }


    render = () => {
      return (
        <>
          <WrappedComponent
            { ...this.props }
            checkoutChairs={ this.checkoutChairs }
            selectedChairsToCheckout={ this.state.selectedChairsToCheckout }
            chairReservation={ this.state.chairReservation }
            createReservation={ this.createReservation }
            availableChairs={ this.state.availableChairs }
            showReservation={ this.state.showReservation }
            checkAvailableTables={ this.checkAvailableTables }
            getSelectedTable={ this.getSelectedTable }
            selectedTable={ this.state.selectedTable }
            newTables={ this.state.newTables }
            getTables={ this.getTables}
            onChangeTablesHOC={ this.onChangeTablesHOC}
            showUpdateTable={ this.state.showUpdateTable }
            showCreateTable={ this.state.showCreateTable }
            tables={ this.state.tables }
            createTables={ this.createTables } />
          <PromptModal
            showPromptModal={ this.state.showPromptModal }
            onClickYes={() => {
              this.setState({ showPromptModal: false }, () => {
                this.getTables()
              })              
            }}
            content={ 
              <ReservationResult 
                result={ this.state.reservationResult }/> 
            }/> 
        </>
      )
    }
  }
  return WithHOC
}

export default HOC