import React, { Component } from 'react';
import {useState, useEffect} from 'react';
import { Link, Switch, Route, BrowserRouter as Router, withRouter } from 'react-router-dom';
import './App.css';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Home from './Home'
import Registration from './components/Registration/Registration';

const particlesOptions = {
    particles: {
      number: {
        value: 10,
        density: {
          enable: true,
          value_area: 150
        }
      }
    }
  }

function App(){

const [isSignedIn, setIsSignedIn] = useState(false );


return(

      <Router>
     <div className ='App'>
      <Particles className='particles' params={particlesOptions} />
      {isSignedIn == false ? <Signin onSigninOut={setIsSignedIn}/>
      : (
        <div>
            <Navigation onSigninOut={setIsSignedIn}/>
         <Switch>
            <Route exact path = "/">
                <Home/>
            </Route>
            <Route exact path = '/signin'>
                <Signin onSigninOut={setIsSignedIn}/>
            </Route>
            <Route exact path = '/registration'>
                <Registration/>
            </Route>
         </Switch>
         </div>)
      }
         
       </div>
   </Router>
);
 }



export default App;