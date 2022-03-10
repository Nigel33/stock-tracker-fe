import Axios from 'axios'
import getDomainURL from 'utils/api'

export const Get = ( url, response, error, load ) => {
  let token = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser")).token
    : "";

  Axios.defaults.headers = {    
    'Authorization': `Bearer ${ token }`
  }
  
  load( true )      
  return Axios.get( `${ getDomainURL() }${ url }` ).then( res => {
    response( res.data )
    load( false )
  }).catch( err => {    
    if( err && err.response ) {            
      error( err.response.data )     
    } else if( err.response ) {      
      error( err.response.data )
    } else {
      error( 'Uh oh, something went wrong. Please contact your friendly neighbourhood developers for assistance' )
    }
    load( false )
  })
}

export const Post = ( url, data, response, error, load ) => {
  let token = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser")).token
    : "";

  Axios.defaults.headers = {    
    'Authorization': `Bearer ${ token }`
  }

  load( true )    
  return Axios.post( `${ getDomainURL() }${ url }`, data ).then( res => {
    response( res.data )
    load( false )
  }).catch( err => {        
    if( err && err.response ) {   
      error( err.response.data )
    } else {
      error( 'Uh oh, something went wrong. Please contact your friendly neighbourhood developers for assistance' )
    }
    load( false )
  })
}

export const Put = ( url, data, response, error, load ) => {
  let token = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser")).token
    : "";

  Axios.defaults.headers = {    
    'Authorization': `Bearer ${ token }`
  }
  
  load( true )  
  
  return Axios.put( `${ getDomainURL() }${ url }`, data ).then( res => {
    response( res.data )
    load( false )
  }).catch( err => {        
    if( err && err.response && err.response.status ) {      
      error( err.response.data )     
    } else if( err ) {
      error( err.response.data )
    } else {
      error( 'Uh oh, something went wrong. Please contact your friendly neighbourhood developers for assistance' )
    }
    load( false )
  })
}

export const Delete = ( url, response, error, load ) => {
  let token = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser")).token
    : "";

  Axios.defaults.headers = {    
    'Authorization': `Bearer ${ token }`
  }
  
  load( true )  
  
  return Axios.delete( `${ getDomainURL() }${ url }` ).then( res => {
    response( res.data )
    load( false )
  }).catch( err => {
    if( err && err.response && err.response.status ) {      
      error( err.response.data )
    } else if( err ) {
      error( err.response.data )
    } else {
      error( 'Uh oh, something went wrong. Please contact your friendly neighbourhood developers for assistance' )
    }
    load( false )
  })
}