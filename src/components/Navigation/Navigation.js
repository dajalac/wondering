import React from 'react'; 
import './Navigation.css';
import { Link } from 'react-router-dom';
import logo from './thought-bubble.png';

const Navigation = ({onSigninOut}) => {
    return( 
       
            <nav className='main-nav' >
                <img className=' pa2 item logoFormat' alt='Logo' src={logo} width='60' height='60'></img>
                <div className='divider'></div>
                <ul className='item'>
                <li className='f3  underline '>
                         <Link to='/'>Home</Link></li>
                    <li className='f3  underline '>
                         <Link to='/setting'>Setting</Link></li> 
                    <li className=' f3 underline pointer'>
                        <Link to ='/signin'onClick={()=>onSigninOut(false)}>Sign out</Link> </li>
                </ul>

            </nav>
        
        
      
    )
}
export default Navigation; 
