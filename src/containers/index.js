import React, { Component } from 'react'
import Ingredients from './Ingredients'
import Outlets from './Outlets'
import Navbar from 'components/Navigation.js'
import Login from '../Login'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

class Home extends Component  {
  
  render() {
    const user = "admin"
    return (
      <div className="App">       
        <Navbar 
          user={ user }/>
        <Routes >     
          <Route path="/login" element={ <Login /> } initialPath/>      
          <Route path="/outlets" element={ <Outlets /> }/>  
          <Route path="/ingredients" element={ <Ingredients /> }/>  
          <Route path="/" element={ <Ingredients /> }/>     
        </Routes>       
      </div> 
    )
    
  }
}

export default Home