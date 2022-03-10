export default function() {
  if( window.location.host.indexOf( 'localhost' ) !== -1 ) {    
    return 'http://localhost:3001'; 
  } else {
    return 'https://stock-tracker-be-test.herokuapp.com'    
  }
}