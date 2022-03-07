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
  onChangeIngredientsHOC,  
  newIngredient,
  outletsDictionary,
  createAndAssignIngredientToOutlet,
}) => {
  const [selectedOutlets, setSelectedOutlets] = useState([]);

  const onChangeIngredientData = ( key, val ) => {
    let tmp = _.cloneDeep( newIngredient )
    tmp[ key ] = val
    return onChangeIngredientsHOC( 'newIngredient', tmp )
  }

  return (
    <Modal show={ showCreateModal }>
      <Modal.Header 
        onClick={ () => onChangeIngredientsHOC( 'showCreateModal')}
        closeButton>
        <Modal.Title>Create Ingredient</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Container>
            <Row>
              <Col md={ 12}>
                <Form.Group className="mb-3" controlId="quantity">
                  <Form.Label>Name</Form.Label>
                  <Form.Control 
                    value={ newIngredient.name }
                    onChange={ (e) => onChangeIngredientData( 'name', e.target.value ) }
                    type="text" 
                    placeholder="Ingredient name" />            
                </Form.Group>   
              </Col>
              <Col md={ 12 }>
                <div>
                  <h3>Assign to Outlets</h3>   
                  <Row>   
                  {
                    outletsDictionary.map(x => {
                      return (
                        <div key={ x._id }>                          
                          <Col md={ 5 }>
                            <Form.Group key={ x._id }className="mb-3" controlId="quantity">                    
                              <Form.Check 
                                onChange={ e => {     
                                  if( !e.target.checked ) {
                                    let tmp = _.cloneDeep( selectedOutlets )
                                    let tmpIndex = _.findIndex( tmp, { outletId: x._id })                                    
                                    tmp.splice( tmpIndex, 1 )                                    
                                    setSelectedOutlets( tmp )
                                  } else {                                   
                                    setSelectedOutlets(selectedOutlets.concat([{ outletId: x._id, amount: 0 }]))     
                                  }                                                 
                                  
                                }}
                                type="checkbox" 
                                label={ x.value }/>            
                            </Form.Group>   
                          </Col>                          
                          <Col md={ 7 }>
                            <Form.Group key={ x._id } className="mb-3" controlId="quantity">
                              <Form.Label>Amount</Form.Label>                                                  
                              <Form.Control 
                                value={ _.filter(selectedOutlets, { outletId: x._id }).length > 0 ? _.filter(selectedOutlets, { outletId: x._id }).amount : 0 }
                                disabled={ _.isEmpty(_.filter(selectedOutlets, { outletId: x._id })) }                               
                                onChange={ e => { 
                                  let tmp = _.cloneDeep(selectedOutlets)
                                  let el = _.filter(tmp, { outletId: x._id } )[0]
                                  el.amount  = e.target.value                                                  
                                  setSelectedOutlets(tmp)     
                                }}
                                type="number" />            
                            </Form.Group> 
                          </Col>                                             
                        </div>                 
                      )                
                    })
                  }   
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>                                     
        </Form>
      </Modal.Body>
      <Modal.Footer>        
        <Button variant="primary" 
          onClick={() => {   
            let tmp = _.cloneDeep( newIngredient )
            tmp['ingredientOutlets'] = selectedOutlets              
            createAndAssignIngredientToOutlet( tmp )
          }}>
          Create and assign
        </Button> 
      </Modal.Footer>
    </Modal>
  )  
}

export default Create