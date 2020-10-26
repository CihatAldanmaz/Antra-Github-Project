import './App.css';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <Router>

    <div className="App">
    <Route component={Dashboard}/>
    </div>
    </Router>

  );
}

export default App;
