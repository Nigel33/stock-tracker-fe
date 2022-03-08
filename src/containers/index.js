import React, { useEffect } from 'react'
import Navbar from 'components/Navigation.js'

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { useAuthState } from 'Context'
import _ from 'lodash'
import routes from 'Config/routes'
import AppRoute from 'components/AppRoutes';

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
              key={route.path}
              path={route.path}
              component={route.component}
              availableTo={route.availableTo}
            />
          ))
        }
      </Switch>
             
    </div> 
  )
  
}



export default Home