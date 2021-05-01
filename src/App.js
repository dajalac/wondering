import React, { Component } from 'react';
import {useState, useEffect} from 'react';
import { Link, Switch, Route, BrowserRouter as Router, withRouter } from 'react-router-dom';
import './App.css';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Home from './Home'
import Registration from './components/Registration/Registration';
import Setting from './components/Setting/Setting';

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
const [user, setUser] = useState({   id: '', name: '', email: '', number_faces: 0, ranking: 0, joined: ' ' })



return(

      <Router>
     <div className ='App'>
      <Particles className='particles' params={particlesOptions} />
      
      {isSignedIn == false ? (<Signin onSigninOut={setIsSignedIn} setUser ={setUser}/>)
      : (
        <div>  
         <Switch>
            <Route exact path = "/">
                <Navigation/>
                <Home user={user} setUser= {setUser}/>
            </Route>
            <Route exact path = '/signin'>
                <Signin onSigninOut={setIsSignedIn} setUser ={setUser}/>
            </Route>
            <Route exact path = '/registration'>
                <Registration setUser ={setUser}/>
            </Route>
            <Route exact path = "/setting">
                <Navigation/>
                <Setting/>
            </Route>
         </Switch>
         </div>)
      }
         
       </div>
   </Router>
);
 }



export default App;