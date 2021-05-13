import React from 'react';
import {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import '../Setting/Setting.css'



const ResetPassword = (props)=>{

    const [password, setPassword] = useState ('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState ('');
    const [updated, setUpdated] = useState(false);
    const [updateError, setUpdateError] = useState(false);

    const {id, token} = props.match.params;

    
    let history = useHistory();

    useEffect(()=>{ 
       fetch(`https://enigmatic-beyond-79003.herokuapp.com/resetPassword/${id}/${token}`)
        .then(response => response.json())
        .then(feedBack =>{
            if (feedBack){
               setError(false)// is setting the error, that is why is rendering 
               console.log('true')
            }else{
                setError(true)
                console.log('false')
            }
        })
          
    }, [id, token])

    const goSignin =(()=>{
        history.push('/signin')
        //console.log('aaaaaaaaaaa')
    });

    const goForgotPassword =(()=>{
        history.push("/forgotPassword");
        
    });

    const onPasswordChange =((event)=>{
        setPassword(event.target.value)
    });

    const onPassword2Change =((event)=>{
        setConfirmPassword(event.target.value)
    });

    const onReset =(()=>{

        console.log('on reset')

        if(password ==='' || confirmPassword === ''){
            setUpdateError(true);
            setErrorMsg('Password cannot be empty.Try again')
        }else {
            setErrorMsg('')
        fetch(`https://enigmatic-beyond-79003.herokuapp.com/updatePassword`, {
              method: 'post',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                password1:password,
                password2: confirmPassword,
                id:id
              })
            })
        .then (response => response.json())
        .then(data =>{
            console.log(data)
            switch(data.message){
                case 'passwords do not match':
                    setUpdateError(true);
                    setErrorMsg('Password do not match, try again!')
                    break;
                case 'password updated with sucess':
                    setUpdated(true)
                    setError(false)
                    break;
                default:
                setUpdateError(true);
                setErrorMsg('Password can just be number and letters')
                
            }
        })
        }
    });

    
    if (error){
        return(
            <form className=" bg  br3 ba b--black-10 mv4 w-100 w-50-m  mw6 shadow-5 center">
             <div className=" pa4">
                <h4>Problem resetting passord. Try sent another reset link </h4>
                <p onClick={goForgotPassword}
                 className="pForm f6 link dim black db pointer">Forgot password</p> 
            </div>
            </form>
        )
    }else{
    return(
        <article className=" bg  br3 ba b--black-10 mv4 w-100 w-50-m  mw6 shadow-5 center">
        <div className="container pa4">
            <label className='labelForm'> New password  </label>
            <input className='inputForm' type='password' onChange={onPasswordChange}></input>
            <label className='labelForm'> renter password  </label>
            <input className='inputForm' type='password'onChange={onPassword2Change}></input>
            
            <button onClick ={onReset} className='btn grow link  dib white bg-green'>Submit</button>
          
         <div>   
        {updated && (
           
               <p className="p_Form ">Password updated with sucess! Go to Sign in</p> 
            
        )}
         {updateError && (
            
               <p className="p_Form ">{errorMsg}</p> 
            
        )}
        </div>
        
        <p onClick={goSignin}
           className="p_Form f6 link dim black db pointer"> Sign in </p>
        
        </div>
     </article>
    )
    }
}

export default ResetPassword; 