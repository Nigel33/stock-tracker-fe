import logo from './logo.svg';
import './App.css';
import './index.css';
import { AuthProvider } from "./Context";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './containers'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch >     
          <Home />
        </Switch>                
      </Router>
    </AuthProvider>        
  );
}

export default App;
