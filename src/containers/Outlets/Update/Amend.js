import React, { useEffect, useState } from 'react'
import {
  Form,
  Button,
} from 'react-bootstrap'

const Amend = ({
  ingredientOutlet,
  updateIngredientAmount,
}) => {
  const [amount, setAmount] = useState({});
  
  useEffect(() => {
    setAmount( ingredientOutlet.amount )
  }, [ingredientOutlet._id])
  

  return (
    <>      
      <Form.Group className="mb-3">        
        <Form.Label>Amount</Form.Label>                                                  
        <Form.Control 
          value={ amount }                                   
          onChange={ e => { 
            setAmount(e.target.value)
          }}
          type="number" />            
      </Form.Group> 
      <Button variant="secondary" 
        onClick={() => {   
          let tmp = {
            id: ingredientOutlet._id,
            outletId: ingredientOutlet.outlet,
            ingredientId: ingredientOutlet.ingredient._id,
            amount,           
          }          
          updateIngredientAmount(tmp)
        }}>
        Submit Change
      </Button> 
    </>
  )
}

export default Amend