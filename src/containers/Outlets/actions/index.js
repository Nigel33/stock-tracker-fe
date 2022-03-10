import { get } from 'lodash'
import React, { Component } from 'react'
import PromptModal from 'components/indicator/prompt'
import { toast } from 'react-toastify';

import { Get, Put, Post, Delete } from 'utils/axios'

const HOC = ( WrappedComponent ) => {
  class WithHOC extends Component {
    state = {
      loading: false,
      outlets: [], 
      selectedOutlet: {},
      showUpdateModal: false,           
    }

    load = param => this.setState({ loading: param })
    
    onChangeOutletsHOC = ( key, val ) =>  this.setState({ [ key ]: val })  
     
    getOutlets = () => Get(
      '/api/outlets',
      this.getOutletsSuccess,
      this.getOutletsError,
      this.load
    )
    getOutletsSuccess = payload => this.setState({ outlets: payload })
    getOutletsError = error => console.log( error )

    getIngredientsInOutlet = (id) => Get(
      `/api/outlets/getIngredientsInOutlet/${ id }`,
      this.getIngredientsInOutletSuccess,
      this.getIngredientsInOutletError, 
      this.load
    )
    getIngredientsInOutletSuccess = payload => {
      this.setState({ 
        selectedOutlet: payload, 
        showUpdateModal: true 
      })
    }
    getIngredientsInOutletError = error => console.log( error )

    updateIngredientAmount = data => {      
      Put(
        `/api/outlets/updateIngredientAmount/${ data.id }`,
        data,
        this.updateIngredientAmountSuccess,
        this.updateIngredientAmountError,
        this.load
      )
    }
    updateIngredientAmountSuccess = payload => {
      this.getIngredientsInOutlet(payload.outlet)
      toast.success("Updated successfully")
    }
    updateIngredientAmountError = error => toast.error( error.message )

    render = () => {
      return (
        <>
          <WrappedComponent
            { ...this.props }              
            updateIngredientAmount={ this.updateIngredientAmount }    
            getIngredientsInOutlet={ this.getIngredientsInOutlet }              
            onChangeOutletsHOC={ this.onChangeOutletsHOC}             
            showUpdateModal={ this.state.showUpdateModal }
            selectedOutlet={ this.state.selectedOutlet }
            outlets={ this.state.outlets }
            getOutlets={ this.getOutlets }/>          
        </>
      )
    }
  }
  return WithHOC
}

export default HOC