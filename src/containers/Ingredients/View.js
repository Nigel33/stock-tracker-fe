import React from 'react'
import {
  Modal,
  Button,
  Form
} from 'react-bootstrap'
import _ from 'lodash'

const View = ({
  selectedIngredient,
  showViewModal,
  onChangeIngredientsHOC,
}) => {
  return (
    <Modal show={ showViewModal }>
      <Modal.Header 
        onClick={ () => onChangeIngredientsHOC( 'showViewModal', false )}
        closeButton>
        <Modal.Title>View ingredient</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>{ selectedIngredient.name }</h3>
        <div>
          <ul>
            {
              selectedIngredient.ingredientOutlets.map(x => {
                return (
                  <li key={ x._id }>{ x.outlet.name } - { x.amount } units</li>
                ) 
                
              })
            }
          </ul>          
        </div>
      </Modal.Body>      
    </Modal>
  )  
}

export default View