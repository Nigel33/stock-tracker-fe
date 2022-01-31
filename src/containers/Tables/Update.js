import React from 'react'
import {
  Modal,
  Button,
  Form
} from 'react-bootstrap'
import _ from 'lodash'
import ReactTable from 'react-table'

const Update = ({
  showUpdateTable,
  onChangeTablesHOC,
  selectedTable,
  newChairs,  
  createChairs,
  onChangeChairsHOC,
  selectedChairsToCheckout,
  checkoutChairs,
}) => {
  const onChangeChairData = ( key, val ) => {
    let tmp = _.cloneDeep( newChairs )
    tmp[ key ] = val
    return onChangeChairsHOC( 'newChairs', tmp )
  }

  return (  
    <Modal show={ showUpdateTable }>
      <Modal.Header 
        onClick={ () => onChangeTablesHOC( 'showUpdateTable')}
        closeButton>
        <Modal.Title>Update Table { selectedTable.label }</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="quantity">
            <Form.Label>Add no of chairs to table</Form.Label>
            <Form.Control 
              onChange={ (e) => onChangeChairData( 'quantity', e.target.value ) }
              type="number" 
              placeholder="1-10 normally" />            
          </Form.Group>           
        </Form>
       <ReactTable 
        defaultPageSize={ 10 }
        pagination={ true }
        data={ selectedTable.chairs }
        columns={[
          {
            Header: "Select",
            Cell: ( row ) => (
              <div className="d-flex align-items-center justify-content-center w-100">
                 <Form.Check
                    type="checkbox"
                    onChange={ e => {
                      let tmp = _.cloneDeep( selectedChairsToCheckout )
                      tmp.push( row.original )
                      onChangeTablesHOC( 'selectedChairsToCheckout', tmp )
                    }}/>                
              </div>
            ),
            width: 60
          },          
          {
            Header: "Label",
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
            let tmp = _.cloneDeep( newChairs )

            tmp.tableId = selectedTable._id   
            console.log(tmp)         
            createChairs( tmp )
          }}>
          Add chairs
        </Button> 
        <Button variant="danger" 
          onClick={() => {
            let tmp = { chairs: selectedChairsToCheckout }
            checkoutChairs( tmp )
          }}>
          Checkout
        </Button> 
      </Modal.Footer>
    </Modal>
  )  
}

export default Update