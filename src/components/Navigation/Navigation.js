import React from 'react'; 
import './Navigation.css';
import logo from './thought-bubble.png';

const Navigation = () => {
    return( 
       
            <nav className='main-nav' >
                <img className=' pa2 item logoFormat' alt='Logo' src={logo} width='60' height='60'></img>
                <div className='divider'></div>
                <ul className='item'>
                    <li className='f3  underline '><p>Setting</p> </li>
                    <li className=' f3 underline pointer'><p>Sign out</p> </li>
                </ul>

            </nav>
        
        
      
    )
}
export default Navigation; 
