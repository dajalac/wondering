import React from 'react'; 
import './Navigation.css';
import { Link } from 'react-router-dom';
import logo from './thought-bubble.png';

const Navigation = ({onSigninOut}) => {
    return( 
       
            <nav className=' main-nav' >
                <img className=' pa2 item logoFormat' alt='Logo' src={logo} width='60' height='60'></img>
                <div className='divider'></div>
                <ul className='item'>
                <li className='f4  '>
                         <Link to='/home'>Home</Link></li>
                    <li className='f4   '>
                         <Link to='/setting'>Setting</Link></li> 
                    <li className=' f4 pointer'>
                        <Link to ='/'>Sign out</Link> </li>
                </ul>

            </nav>
        
        
      
    )
}
export default Navigation; 
