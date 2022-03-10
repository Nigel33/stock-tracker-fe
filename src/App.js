import logo from './logo.svg';
import './app.css';
import './index.css';
import { AuthProvider } from "./context";
import { Switch, HashRouter as Router } from 'react-router-dom'
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
