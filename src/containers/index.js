import React, { useEffect } from 'react'
import Navbar from 'components/Navigation.js'
import axios from 'axios'

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { useAuthState } from 'Context'
import _ from 'lodash'
import routes from 'Config/routes'
import AppRoute from 'components/AppRoutes';

const Home = (props) => {
  const user = useAuthState() 
  useEffect(() => {
    console.log('setting defailt')
    axios.defaults.headers.common['Authorization'] = "apple";
  }, [])
  
  
  return (    
    <div className="App">            
      <Navbar 
        user={ user }/>
      <Switch>
        {
          routes.map((route) => (
            <AppRoute
              user={ user }
              key={ route.path }
              path={ route.path }
              component={ route.component }
              availableTo={ route.availableTo }
            />
          ))
        }
      </Switch>             
    </div> 
  )
  
}



export default Home