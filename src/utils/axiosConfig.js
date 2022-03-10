import axios from 'axios'

let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).token
  : "";

export default axios.create({  
  headers: {
    'Authorization': `Bearer ${token}`
  }
})