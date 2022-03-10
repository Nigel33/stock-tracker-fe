import React, { useEffect } from 'react'
import { 
  Form,
  Col,
  Button,
  Container,
  Row,
} from 'react-bootstrap'

import { logout, useAuthDispatch } from 'context'

const Logout = props => {
  const dispatch = useAuthDispatch() 

  useEffect(() => {    
    handleLogout()
  }, []);


  const handleLogout = () => {    
    logout(dispatch) 
    
    props.history.push('/login') //navigate to logout page on logout
  }

  return (
    <>
    </>
  )
}

export default Logout