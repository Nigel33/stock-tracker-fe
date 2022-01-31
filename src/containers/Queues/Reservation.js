import React from 'react'
import {
  Modal,
  Button,
  Form
} from 'react-bootstrap'
import _ from 'lodash'
import ReactTable from 'react-table'

const Reservation = ({  
  onChangeTablesHOC,  
  showReservation,
  onChangeChairsHOC,
  newChairs,
  selectedTable,
  createChairs,
  chairReservation,
  availableChairs,
  createReservation,
}) => {
  const onChangeTableData = ( key, val ) => {
    let tmp = _.cloneDeep( chairReservation )
    tmp[ key ] = val
    return onChangeTablesHOC( 'chairReservation', tmp )
  }

  return (  
    <Modal show={ showReservation }>      
      <Modal.Header 
        onClick={ () => onChangeTablesHOC( 'showReservation')}
        closeButton>
        <Modal.Title>Make Reservations</Modal.Title>
      </Modal.Header>
      <Modal.Body>        
       <ReactTable 
        defaultPageSize={ 10 }
        pagination={ true }
        data={ availableChairs }
        columns={[
          {
            Header: "Table", 
            accessor: 'tableLabel'
          },
          {
            Header: "Chair Label",
            accessor: "label"
          },
          {
            Header: "Is Available",
            Cell: row => {
              return row.original.isAvailable ? "Yes" : "No"
            }
          }          
        ]}/>
      </Modal.Body>
      <Modal.Footer>        
        <Button variant="primary" 
          onClick={() => {
            // let tmp = _.cloneDeep( chairReservation )    
            // tmp.chairs = availableChairs                         
            // createReservation( tmp )
          }}>
          Place Queue in Available Seats
        </Button> 
      </Modal.Footer>
    </Modal>
  )  
}

export default Reservation