import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from './Home'
import Task1 from './Task1';
import Task2 from './Task2';
import Task3 from './Task3';
import Task4 from './Task4';
import NotFound from './NotFound';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/task1">Task 1</Link>
        </li>
        <li>
          <Link to="/task2">Task 2</Link>
        </li>
        <li>
          <Link to="/task3">Task 3</Link>
        </li>
        <li>
          <Link to="/task4">Task 4</Link>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/task1" />
        </Route>
        <Route path="/task1" component={Task1} />
        <Route path="/task2" component={Task2} />
        <Route path="/task3" component={Task3} />
        <Route path="/task4" component={Task4} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
