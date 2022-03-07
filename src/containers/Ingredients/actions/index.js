import { get } from 'lodash'
import React, { Component } from 'react'
import PromptModal from 'components/Indicator/Prompt'

import { Get, Put, Post, Delete } from 'utils/axios'

const HOC = ( WrappedComponent ) => {
  class WithHOC extends Component {
    state = {
      loading: false,
      ingredients: [], 
      selectedIngredient: {},
      showViewModal: false,     
      showCreateModal: false,
      newIngredient: {},
    }

    load = param => this.setState({ loading: param })
    
    onChangeIngredientsHOC = ( key, val ) => this.setState({ [ key ]: val })

    getIngredients = () => Get(
      '/api/ingredients',
      this.getIngredientsSuccess,
      this.getIngredientsError,
      this.load
    )
    getIngredientsSuccess = payload => this.setState({ ingredients: payload })
    getIngredientsError = error => console.log( error )

    getAmountForAllOutlets = (id) => Get(
      `/api/ingredients/getAmountForAllOutlets/${ id }`,
      this.getAmountForAllOutletsSuccess,
      this.getAmountForAllOutletsError, 
      this.load
    )
    getAmountForAllOutletsSuccess = payload => {
      this.setState({ 
        selectedIngredient: payload, 
        showViewModal: true 
      })
    }

    createAndAssignIngredientToOutlet = data => {
      Post(
        `/api/ingredients/createAndAssignToOutlets`,
        data,
        this.createAndAssignIngredientToOutletSuccess,
        this.createAndAssignIngredientToOutletError, 
        this.load
      )
    }
    createAndAssignIngredientToOutletSuccess = () => {
      this.setState({ showCreateModal: false })
      this.getIngredients()
    }
    createAndAssignIngredientToOutletError = error => {
      console.log(error)
    }
    
    render = () => {
      return (
        <>
          <WrappedComponent
            { ...this.props } 
            createAndAssignIngredientToOutlet={ this.createAndAssignIngredientToOutlet }
            newIngredient={ this.state.newIngredient }
            showCreateModal={ this.state.showCreateModal }
            onChangeIngredientsHOC={ this.onChangeIngredientsHOC} 
            getAmountForAllOutlets={ this.getAmountForAllOutlets }
            showViewModal={ this.state.showViewModal }
            selectedIngredient={ this.state.selectedIngredient }
            ingredients={ this.state.ingredients }
            getIngredients={ this.getIngredients }/>          
        </>
      )
    }
  }
  return WithHOC
}

export default HOC