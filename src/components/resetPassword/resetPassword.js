import React from 'react';
import {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';


const ResetPassword = (props)=>{

    const [password, setPassword] = useState ('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(false);

    const {id, token} = props.match.params;

    


    let history = useHistory();

    useEffect(()=>{
        console.log('inside useeffect')
        fetch(`http://localhost:3000/resetPassword/${id}/${token}`)
        .then(response => response.json())
        .then(feedBack =>{
            console.log("kkk",feedBack)
            if (feedBack){
               setError(false)
               console.log('true')
            }else{
                setError(true)
                console.log('false')
            }
        })
        
    }, [])

    const goSignin =(()=>{
        history.push('/signin')
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
        // reset password
    })

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
        <form className=" bg  br3 ba b--black-10 mv4 w-100 w-50-m  mw6 shadow-5 center">
        <div className=" pa4">
            <label className=''> New password  </label>
            <input className='' type='text' onClick={onPasswordChange}></input>
            <label className=''> renter password  </label>
            <input className='' type='text'onClick={onPassword2Change}></input>
            <button className=' grow' onClick ={onReset}>reset</button>
        <div>
        <p onClick={goSignin}
           className="pForm f6 link dim black db pointer">Cancel</p>
        </div>
        <div>
        <p className="pForm ">hahahaha</p>
        </div> 
        </div>
     </form>
    )
    }
}

export default ResetPassword; 