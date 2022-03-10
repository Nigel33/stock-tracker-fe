import React, { useState } from 'react'
import Axios from 'axios'
import { 
  Form,
  Col,
  Button,
  Container,
  Row,
} from 'react-bootstrap'
import { Post } from 'utils/axios'
import { loginUser, useAuthState, useAuthDispatch } from 'context'

const Login = props => {
  const dispatch = useAuthDispatch() 
  const { loading, errorMessage } = useAuthState()
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async payload => {
    try {
      let response = await loginUser(dispatch, payload) 
      if (!response.user) return  
      props.history.push("/") 
  } catch (error) {
      console.log(error)
  }
  }

  return (
    <Form>
      <h1>Login</h1>      
      <Container>
        <Row>
          <Col md={ 12}>
            <Form.Group className="mb-3" controlId="quantity">
              <Form.Label>Username</Form.Label>
              <Form.Control 
                value={ username }
                onChange={ (e) => setUsername(e.target.value) }
                type="text" />            
            </Form.Group>   
            <Form.Group className="mb-3" controlId="quantity">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                value={ password }
                onChange={ (e) => setPassword(e.target.value) }
                type="password"/>            
            </Form.Group>  
          </Col>   
          <Button 
            disabled={ loading }
            variant="primary" 
            onClick={() => {   
              let tmp = { username, password }
              handleLogin( tmp )
            }}>
            Create and assign
          </Button>        
        </Row>
      </Container>                                     
    </Form>
  )
}

export default Login