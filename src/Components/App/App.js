import { Route, Switch } from 'react-router-dom';
import React from 'react';
import About from '../../Routes/About/About';
import Home from '../../Routes/Home/Home';
import Contact from '../../Routes/Contact/Contact';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path={'/'} component={Home}/>
        <Route exact path={'/About'} component={About}/>
        <Route exact path={'/Contact'} component={Contact}/>
      </Switch>
    </div>
  );
}

export default App;
