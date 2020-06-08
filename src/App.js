import React from 'react';
import './App.css';
import Home from './Home';
import Details from './Details';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={ Home } />
      <Route  path="/details/:id" component={Details} />
      </Switch>
      
    </Router>
    )
}
export default App;
