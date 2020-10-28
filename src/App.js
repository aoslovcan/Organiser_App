import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavOrganiser from './components/NavOrganiser';
import CreateNew from './routers/CreateNew';
import Members from './routers/Members';
import Update from './routers/Update';
import Heist from './routers/Heist';
import NewHeist from './routers/NewHeist'

function App() {
  return (
    <div className="App">
      <Router>
        <NavOrganiser/>
        <Switch>
          <Route path="/new" component={CreateNew}/>
          <Route path="/" exact component={Members}/> 
          <Route path="/update/:id" exact component={Update}/>
          <Route path="/heist" exact component={Heist}/>
          <Route path="/newHeist" exact component={NewHeist}/> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
