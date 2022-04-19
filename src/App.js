import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Main from './views/Main'
import Detail from './views/Detail';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" render={ (routeProps) => <Main {...routeProps} />}/>
        <Route exact path="/autor/:id" render={ (routeProps) => <Detail {...routeProps} />}/>
        <Route exact path="/autor/edit/:id" render={ (routeProps) => <Update {...routeProps} />}/>

      </BrowserRouter>
    </div>
  );
}

export default App;
