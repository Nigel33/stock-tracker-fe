import React, { Component } from 'react'
import Tables from './Tables'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

class Home extends Component  {
  
  render() {
    return (
      <div className="App">  
    <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
      <Routes >
        <Route path="/tables" element={ <Tables /> }/>        
      </Routes>       
    </div> 
    )
    
  }
}

export default Home