import React, { Component } from 'react';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './Home'

function App(){
return(
   <Router>
      <div className ='App'>
          <Navigation/>
       <div>
        <Switch>
           <Route exatct path = "/">
               <Home/>
           </Route>
        </Switch>
        </div>
      </div>
    </Router>
);

}

export default App;