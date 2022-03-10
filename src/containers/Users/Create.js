import React, { useState }  from 'react'
import {
  Modal,
  Button,
  Form,
  Container,
  Row,
  Col,
} from 'react-bootstrap'
import _ from 'lodash'

const Create = ({
  showCreateModal,
  onChangeUsersHOC,  
  newUser,
  outletsDictionary,
  createUser,
}) => {
  const [selectedOutlets, setSelectedOutlets] = useState([]);

  const onChangeUserData = ( key, val ) => {
    let tmp = _.cloneDeep( newUser )
    tmp[ key ] = val
    return onChangeUsersHOC( 'newUser', tmp )
  }

  return (
    <Modal show={ showCreateModal }>
      <Modal.Header 
        onClick={ () => onChangeUsersHOC( 'showCreateModal')}
        closeButton>
        <Modal.Title>Create User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Container>
            <Row>
              <Col md={ 12}>
                <Form.Group className="mb-3" controlId="quantity">
                  <Form.Label>Username</Form.Label>
                  <Form.Control 
                    value={ newUser.username }
                    onChange={ (e) => onChangeUserData( 'username', e.target.value ) }
                    type="text" 
                    placeholder="User name" />            
                </Form.Group>   
              </Col>
              <Col md={ 12}>
                <Form.Group className="mb-3" controlId="quantity">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                    value={ newUser.password }
                    onChange={ (e) => onChangeUserData( 'password', e.target.value ) }
                    type="text" 
                    placeholder="Password" />            
                </Form.Group>   
              </Col>
              <Col md={ 12}>
                <Form.Group className="mb-3" controlId="userType">   
                  <Form.Label>Select user type</Form.Label>
                  <Form.Select aria-label="Select type"
                    onChange={ (e) => {                      
                      onChangeUserData( 'userType', e.target.value )}
                    }>    
                    <option value=""> </option>              
                    <option value="manager">Manager</option>
                    <option value="employee">Employee</option>                   
                  </Form.Select>    
                </Form.Group>
              </Col>
              <Col md={ 12 }>
                <Form.Group>
                <Form.Label>Assign an outlet</Form.Label>
                  <Form.Select aria-label=""
                    onChange={ (e) => onChangeUserData( 'outletId', e.target.value ) } >   
                    <option value=""> </option>          
                    {                          
                      outletsDictionary.map(x => {                        
                        return (                          
                          <option value={ x._id }>{ x.value }</option>
                        )
                      })
                    }
                  </Form.Select>  
                </Form.Group>               
              </Col>                          
            </Row>
          </Container>                                     
        </Form>
      </Modal.Body>
      <Modal.Footer>        
        <Button variant="primary" 
          onClick={() => {      
            console.log(newUser)                           
            createUser( newUser )
          }}>
          Create and assign
        </Button> 
      </Modal.Footer>
    </Modal>
  )  
}

export default Create