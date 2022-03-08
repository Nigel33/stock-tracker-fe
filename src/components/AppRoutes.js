import React from "react";
import { Redirect, Route } from "react-router-dom";
 
import { useAuthState } from 'Context'
 
const AppRoutes = ({ component: Component, path, availableTo, ...rest }) => { 
  const user = useAuthState()
  console.log("Im user", user)
  console.log(availableTo)
  

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
          <Component {...props} />          
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