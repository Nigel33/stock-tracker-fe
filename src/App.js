import logo from './logo.svg';
import './App.css';
import './index.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './containers'

function App() {
  return (
    <Router>
      <Home />           
    </Router>
    
  );
}

export default App;
