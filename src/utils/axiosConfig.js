import axios from 'axios'

let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).token
  : "";

export default axios.create({
  baseURL: 'http://localhost:4444/',
  headers: {
    'Authorization': `Bearer ${token}`
  }
})