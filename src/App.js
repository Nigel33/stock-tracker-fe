import logo from './logo.svg';
import './app.css';
import './index.css';
import { AuthProvider } from "./context";
import { Switch, HashRouter as Router } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './containers'

toast.configure()

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch >     
          <Home />
          <ToastContainer />
        </Switch>                
      </Router>
    </AuthProvider>        
  );
}

export default App;
