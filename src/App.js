import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavOrganiser from './components/NavOrganiser';
import CreateNew from './routers/CreateNew';
import Members from './routers/Members';

function App() {
  return (
    <div className="App">
      <Router>
        <NavOrganiser/>
        <Switch>
          <Route path="/new" component={CreateNew}/>
          <Route path="/" exact component={Members}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
