import React, { Component } from 'react'
import Tables from './Tables'
import Navbar from 'components/Navigation.js'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

class Home extends Component  {
  
  render() {
    return (
    <div className="App">       
      <Navbar />
      <Routes >
        <Route path="/tables" element={ <Tables /> }/>   
        <Route path="/" element={ <Tables /> }/>     
      </Routes>       
    </div> 
    )
    
  }
}

export default Home