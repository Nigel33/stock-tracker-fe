import React, { useState } from 'react'
import {
  Modal,
  Button,
  Form
} from 'react-bootstrap'
import _ from 'lodash'
import ReactTable from 'react-table'
import Amend from './amend'
import { EMPLOYEE } from 'Config/roles'

const Update = ({
  userDetails,
  selectedOutlet,
  showUpdateModal,
  onChangeOutletsHOC,
  showAmendModal,
  updateIngredientAmount,
}) => {
  const [selectedField, setSelectedField] = useState({});

  return (
    <>
      <Modal size="lg" show={ showUpdateModal }>
        <Modal.Header 
          onClick={ () => onChangeOutletsHOC( 'showUpdateModal', false )}
          closeButton>
          <Modal.Title>View outlet - { selectedOutlet.name } | { selectedOutlet.gps }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReactTable 
            data={ selectedOutlet.ingredientOutlets }
            columns={[
              {
                Header: "Ingredient name",
                Cell: row => {
                  return row.original.ingredient.name
                }
              },  
              {
                Header: "Amount",
                accessor: "amount"
              },                           
              {
                Header: "Actions",
                Cell: row => {
                  return (
                    <>                                         
                      <Button 
                        disabled={ userDetails.userType === EMPLOYEE }
                        variant="primary"
                        onClick={ () => setSelectedField(row.original) }>Amend</Button>                      
                    { 
                        (selectedField._id === row.original._id) && (
                          <Amend 
                            ingredientOutlet={ row.original }
                            updateIngredientAmount={ updateIngredientAmount }/>
                        )
                      }                      
                    </>
                   
                  )
                }
              }
            ]}/>        
        </Modal.Body>      
      </Modal>     
    </>    
  )  
}

export default Update