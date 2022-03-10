import React, { useState } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import {
  Modal,
  Button,
  Form
} from 'react-bootstrap'
import _ from 'lodash'
import ReactTable from 'react-table'
import Amend from './amend'
import { EMPLOYEE } from 'config/roles'

const Update = ({
  userDetails,
  selectedOutlet,
  showUpdateModal,
  onChangeOutletsHOC,
  showAmendModal,
  updateIngredientAmount,
  google,
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
          <div className="mx-auto "style={{ height: '300px', width: 'auto' }}>
            <h5>Map</h5>
            <Map   
              style={{ height: '300px', width: '500px', margin: '0 auto' }}
              google={ google }
              zoom={ 14 }
              initialCenter={
                {
                  lat: selectedOutlet.gps.split(", ")[0],
                  lng: selectedOutlet.gps.split(", ")[1]
                }
            }>
              <Marker />
            </Map>
          </div>          
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

export default GoogleApiWrapper({
  apiKey: "AIzaSyCGA7Nt0YwFgnLp0neu4lXPu-W7CjLjMNE"
})(Update)