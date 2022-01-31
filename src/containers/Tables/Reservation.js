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
        <Form>
          <Form.Group className="mb-3" controlId="customerCount">
            <Form.Label>How many seats would you like to reserve</Form.Label>
            <Form.Control 
              onChange={ (e) => onChangeTableData( 'customerCount', e.target.value ) }
              type="number" 
              placeholder="1-10" />            
          </Form.Group>           
        </Form>
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
            let tmp = _.cloneDeep( chairReservation )    
            tmp.chairs = availableChairs                         
            createReservation( tmp )
          }}>
          Reserve
        </Button> 
      </Modal.Footer>
    </Modal>
  )  
}

export default Reservation