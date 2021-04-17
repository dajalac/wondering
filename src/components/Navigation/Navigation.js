import React from 'react'; 
import './Navigation.css';
import logo from './thought-bubble.png';

const Navigation = () => {
    return( 
        <nav className ='flex-container' >
            <img className= 'pa3' alt='Logo' src ={logo} width='80' height='80'></img>
            <ul className ='pa0'>
                <li><p className= ' f3 underline pointer pa1'>Setting</p></li>
                <li><p className= ' f3 underline pointer pa1'>Sigin out</p> </li>
                
            </ul>
           
              
    
        </nav>
        
      
    )
}

export default Navigation; 