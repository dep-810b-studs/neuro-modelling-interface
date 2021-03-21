import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Results from './Pages/Results';
import Tasks from './Pages/Tasks';

function App() {
  return (
    <>
        <Router>
          <Navbar/>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/tasks' component={Tasks} />
              <Route path='/results' component={Results} />
            </Switch>
        </Router>
    </>
  );
}

export default App;
