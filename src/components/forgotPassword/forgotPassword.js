import React from 'react';
import { useHistory } from 'react-router-dom';
import {useState,useEffect} from 'react';
import './ForgotPassword.css'

const ForgotPassword = ()=>{

    const [email, setEmail] = useState('');
    const [errorMsg, setErrorMsg] = useState(false);
    const [serverResponse, setServerResponse]= useState(false)

    let history = useHistory();

    const onEmailChange =((event)=>{
        setEmail(event.target.value);
   })

    const goSignin =(()=>{
        history.push('/')

    })
    
    const goRegister = (()=>{
        history.push("/registration"); 
    })

    const forgotBtn = (()=>{
        console.log('email',email)
        setErrorMsg(false)
        setServerResponse(false)
        fetch('http://localhost:3000/forgotPassword', {
            method:'post',
            headers:{'content-Type':'application/json'},
            body: JSON.stringify({
                email: email
            })
        })
        .then(response => response.json())
        .then(serverMessage =>{
            console.log(serverResponse)
            if(serverMessage){
             setServerResponse(true)
             setErrorMsg(false)
            }
            else{
                setErrorMsg(true)
                setServerResponse(false)
            }
        })
    
    })

    return(
        <div className=" bg  br3 ba b--black-10 mv4 w-100 w-50-m  mw6 shadow-5 center">
        <div className=" pa4">
            <label className=''> Email address </label>
            <input className='' type='text' onChange={onEmailChange}></input>
            <button className=' grow link  dib white bg-green' onClick={forgotBtn}>reset</button>
         {errorMsg && (
           <div>
               <p className="pForm">The email address is invalid. Please try again or register for a new account</p>
               <p className =" pForm f6 link dim black db pointer" onClick ={goRegister}>Register</p>
           </div>
         )}
         {serverResponse && (
           <div>
               <p className="pForm">A password reset link was sent to your email address! </p>
           </div>
         )}
        
        <div>
        <p onClick={goSignin}
           className="pForm f6 link dim black db pointer gray">Cancel</p>
        </div>
        </div>
     </div>
    )
}

export default ForgotPassword; 