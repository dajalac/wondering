import React from 'react'; 
import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';
import logo from './thought-bubble.png';

const Navigation = ({onSigninOut}) => {
    return( 
       
            <nav className=' main-nav' >
                <img className=' pa2 item logoFormat' alt='Logo' src={logo} width='60' height='60'></img>
                <div className='divider'></div>
                <ul className='item'>
                <li className='f4  '>
                         <NavLink to='/home'activeClassName="active">Home</NavLink></li>
                    <li className='f4   '>
                         <NavLink to='/setting' activeClassName="active">Setting</NavLink></li> 
                    <li className=' f4 pointer'>
                        <Link to ='/'>Sign out</Link> </li>
                </ul>

            </nav>
        
        
      
    )
}
export default Navigation; 
