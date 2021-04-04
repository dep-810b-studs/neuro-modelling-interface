import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import TasksResults from './Pages/TasksResults/TaskskResults';
import Tasks from './Pages/Tasks/Tasks';

function App() {
  return (
    <>
        <Router>
          <Navbar/>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/tasks' component={Tasks} />
              <Route path='/results' component={TasksResults} />
            </Switch>
        </Router>
    </>
  );
}

export default App;
