import React from 'react';
import { useHistory } from 'react-router-dom';
import {useState} from 'react';
import './ForgotPassword.css'

const ForgotPassword = ()=>{

    const [email, setEmail] = useState('');
    const [errorMsg, setErrorMsg] = useState(false);
    const [nullEmail, setNullEmail] = useState(false);
    const [serverResponse, setServerResponse]= useState(false)

    let history = useHistory();

    const onEmailChange =((event)=>{
          setEmail(event.target.value);
    })

    const goSignin =(()=>{
        history.push('/signin')

    })
    
    const goRegister = (()=>{
        history.push("/registration"); 
    })

    const forgotBtn = (()=>{
        if(email === ''){
            setNullEmail(true);
        }else{
        fetch('http://localhost:3000/forgotPassword', {
            method:'post',
            headers:{'content-Type':'application/json'},
            body: JSON.stringify({
                email: email
            })
        })
        .then(response => response.json())
        .then(serverMessage =>{
            if(serverMessage){
             setServerResponse(serverMessage)
            }
            else{
                setErrorMsg(true)
                setServerResponse(false)
            }
        })
    }
    })

    return(
        <form className=" bg  br3 ba b--black-10 mv4 w-100 w-50-m  mw6 shadow-5 center">
        <div className=" pa4">
            <label className=''> Email address </label>
            <input className='' type='text' onClick={onEmailChange}></input>
            <button className=' grow' onClick={forgotBtn}>reset</button>

        {nullEmail && (
           <div>
               <p className="pForm">The email address cannot be empty </p>
           </div>
         )}
         {errorMsg && (
           <div>
               <p className="pForm">The email address is not in our registers. Please try again or register for a new account</p>
               <p className =" pForm f6 link dim black db pointer" onClick ={goRegister}>Register</p>
           </div>
         )}
         {serverResponse && (
           <div>
               <p className="pForm">A password reset email was sent to your email address! </p>
           </div>
         )}
        
        <div>
        <p onClick={goSignin}
           className="pForm f6 link dim black db pointer">Cancel</p>
        </div>
        </div>
     </form>
    )
}

export default ForgotPassword; 