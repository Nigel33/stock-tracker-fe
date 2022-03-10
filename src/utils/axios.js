import Axios from './axiosConfig'
import getDomainURL from 'utils/api'

export const Get = ( url, response, error, load ) => {
  // const user = useAuthState() 
  load( true )      
  return Axios.get( `${ getDomainURL() }${ url }` ).then( res => {
    response( res.data )
    load( false )
  }).catch( err => {    
    if( err && err.response ) {
      if( err.response.status === 401 ) {
        error( err.response.status )
      } else if( err.response.status === 500 ) {
        error( err.response.data ? err.response.data.title : 'Something wrong happened on the server. Please ask for assistance' )
      } else if( err.response.status === 502 ) {
        error( "Server is down. Please notify IT")
      } else {        
        error( err.response.data )
      }
    } else if( err.response ) {      
      error( err.response.data )
    } else {
      error( 'Uh oh, something went wrong. Please contact your friendly neighbourhood developers for assistance' )
    }
    load( false )
  })
}

export const Post = ( url, data, response, error, load ) => {
  load( true )    
  return Axios.post( `${ getDomainURL() }${ url }`, data ).then( res => {
    response( res.data )
    load( false )
  }).catch( err => {    
    if( err && err.response && err.response.status ) {
      if( err.response.status === 500 ) {
        error( err.response.data ? err.response.data.title : 'Something wrong happened on the server. Please ask for assistance' )
      } else if( err.response.status === 502 ) {
        error( "Server is down. Please notify IT")
      } else {
        error( err.response.data )
      }
    } else if( err ) {      
      error( err.response.data )
    } else {
      error( 'Uh oh, something went wrong. Please contact your friendly neighbourhood developers for assistance' )
    }
    load( false )
  })
}

export const Put = ( url, data, response, error, load ) => {
  load( true )  
  
  return Axios.put( `${ getDomainURL() }${ url }`, data ).then( res => {
    response( res.data )
    load( false )
  }).catch( err => {        
    if( err && err.response && err.response.status ) {
      if( err.response.status === 500 ) {
        error( err.response.data ? err.response.data.title : 'Something wrong happened on the server. Please ask for assistance' )
      } else if( err.response.status === 502 ) {
        error( "Server is down. Please notify IT")
      } else {
        error( err.response.data )
      }
    } else if( err ) {
      error( err.response.data )
    } else {
      error( 'Uh oh, something went wrong. Please contact your friendly neighbourhood developers for assistance' )
    }
    load( false )
  })
}

export const Delete = ( url, response, error, load ) => {
  load( true )  
  
  return Axios.delete( `${ getDomainURL() }${ url }` ).then( res => {
    response( res.data )
    load( false )
  }).catch( err => {
    if( err && err.response && err.response.status ) {
      if( err.response.status === 500 ) {
        error( err.response.data ? err.response.data.title : 'Something wrong happened on the server. Please ask for assistance' )
      } else if( err.response.status === 502 ) {
        error( "Server is down. Please notify IT")
      } else {
        error( err.response.data )
      }
    } else if( err ) {
      error( err.response.data )
    } else {
      error( 'Uh oh, something went wrong. Please contact your friendly neighbourhood developers for assistance' )
    }
    load( false )
  })
}