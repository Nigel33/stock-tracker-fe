import React, { useEffect } from 'react'
import Ingredients from './Ingredients'
import Outlets from './Outlets'
import Navbar from 'components/Navigation.js'
import Login from '../Login'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { useAuthState } from 'Context'
import _ from 'lodash'

const Home = (props) => {
  const userDetails = useAuthState()
  const user = "admin"
  
  useEffect(() => {
    console.log("checking")
    console.log
    
    if (_.isEmpty(userDetails)) {
      props.history.push("/login")
    }    
  }, [userDetails]); 
  
  return (    
    <div className="App">            
      <Navbar 
        user={ user }/>
      <Switch >     
        <Route path="/login" component={ Login  } initialPath/>      
        <Route path="/outlets" component={ Outlets }/>  
        <Route path="/ingredients" component={ Ingredients }/>  
        <Route path="/" component={ Ingredients  }/>     
      </Switch>       
    </div> 
  )
  
}



export default Home