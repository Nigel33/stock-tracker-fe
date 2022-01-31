import React from 'react'
import {
  Modal,
  Button,
  Form
} from 'react-bootstrap'
import _ from 'lodash'

const Create = ({
  showCreateTable,
  onChangeTablesHOC,
  newTables,
  createTables,
}) => {
  const onChangeTableData = ( key, val ) => {
    let tmp = _.cloneDeep( newTables )
    tmp[ key ] = val
    return onChangeTablesHOC( 'newTables', tmp )
  }

  return (
    <Modal show={ showCreateTable }>
      <Modal.Header 
        onClick={ () => onChangeTablesHOC( 'showCreateTable')}
        closeButton>
        <Modal.Title>Create Table</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="quantity">
            <Form.Label>No. of tables</Form.Label>
            <Form.Control 
              onChange={ (e) => onChangeTableData( 'quantity', e.target.value ) }
              type="number" 
              placeholder="1-However many tables you have in your restaurant!" />            
          </Form.Group>           
        </Form>
      </Modal.Body>
      <Modal.Footer>        
        <Button variant="primary" 
          onClick={() => {            
            createTables( newTables )
          }}>
          Create
        </Button> 
      </Modal.Footer>
    </Modal>
  )  
}

export default Create