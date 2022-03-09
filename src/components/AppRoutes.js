import React from "react";
import { Redirect, Route } from "react-router-dom";
  
const AppRoutes = ({ component: Component, path, availableTo, user, ...rest }) => { 
  const isUserValid = (availableTo, user) => {    
    if (!user) return false
    if (availableTo.length === 0) return true         
    if (availableTo.includes(user.userDetails.userType)) return true    

    return false;
  }
  
  return (
    <Route
      path={path}
      render={props =>
        isUserValid(availableTo, user) ? (
          <>            
            <Component {...props} userDetails={ user.userDetails } />     
          </>               
        ) : 
        (
          <Redirect
            to={{ pathname: "/login" }}
          />
        )
      }
      {...rest}
    />
  )
}
 
export default AppRoutes