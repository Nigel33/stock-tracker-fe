import React from 'react'
import Navbar from 'components/navigation'
import axios from 'axios'

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { useAuthState } from 'context'
import _ from 'lodash'
import routes from 'config/routes'
import AppRoute from 'components/appRoutes';

const Home = (props) => {
  const user = useAuthState() 
  
  
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