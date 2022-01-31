import React, { Component } from 'react'
// import { toast } from 'react-toastify'

import { Get, Put, Post, Delete } from 'utils/axios'


const HOC = ( WrappedComponent ) => {
  class WithHOC extends Component {
    state = {
      loading: false,
      chairs: [],      
      newChairs: {},        
      selectedChair: {},
      showCreateChair: false,
    }

    load = param => this.setState({ loading: param })
    // requestError = error => toast.error( error )
    // requestSuccess = success => toast.success( success )

    onChangeChairsHOC = ( key, val ) => this.setState({ [ key ]: val })

    createChairs = data => Post(
      `/api/chairs/quantity_by_table`,
      data,
      this.createChairsSuccess,
      this.createChairsError,
      this.load
    )    
    createChairsSuccess = payload => {      
      this.setState({         
        newChairs: {},         
      })
      this.props.getSelectedTable( this.props.selectedTable._id )
    }
    createChairsError = error => {
      if( typeof( error ) === 'string' ) {
        this.requestError( error )
      } else {
        this.setState({ ChairError: error })
      }
    }    

    render = () => {
      return (
        <>
          <WrappedComponent
            { ...this.props }                     
            newChairs={ this.state.newChairs }            
            onChangeChairsHOC={ this.onChangeChairsHOC}                    
            createChairs={ this.createChairs } />
          {/* <PromptModal
            showPromptModal={ this.state.showPromptModal }
            onClickYes={() => this.removeChair( this.state.toRemoveID )}
            onClickNo={() => this.setState({ showPromptModal: false })}
            content={ 'Are you sure you want to delete the record?' } /> */}
        </>
      )
    }
  }
  return WithHOC
}

export default HOC