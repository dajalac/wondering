import React from 'react'; 
import './Navigation.css';

const Navigation = () => {
    return( 
        <nav className ='flex-container' >
            <p className= ' f3 underline pointer pa3'>Logo</p>
            <ul>
                <li><p className= ' f3 underline pointer pa3'>Setting</p></li>
                <li><p className= ' f3 underline pointer pa3'>Sigin out</p> </li>
                
            </ul>
              
    
        </nav>
        
      
    )
}

export default Navigation; 