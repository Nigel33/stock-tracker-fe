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
  queues,
  chairReservation,
  availableChairs,  
  clearQueues,
}) => {
  const onChangeTableData = ( key, val ) => {
    let tmp = _.cloneDeep( chairReservation )
    tmp[ key ] = val
    return onChangeTablesHOC( 'chairReservation', tmp )
  }

  const handleCount = (availableChairs, queues) => {
    let difference = availableChairs.length - queues.length 
    if (difference > 0) return queues.length  
    return 0
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
        <div>You will be placing { handleCount(availableChairs, queues) } queue on these available { availableChairs.length } chairs</div>     
        <Button variant="primary" 
          onClick={() => {
            const tmp = {
              chairs: availableChairs
            }                                      
            clearQueues( tmp )
          }}>
          Confirm
        </Button> 
      </Modal.Footer>
    </Modal>
  )  
}

export default Reservation