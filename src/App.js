import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavOrganiser from './components/NavOgrganiser';
import CreateNew from './routers/CreateNew';

function App() {
  return (
    <div className="App">
      <Router>
        <NavOrganiser/>
        <Switch>
          <Route path="/new" component={CreateNew}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
