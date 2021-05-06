import React from 'react';
import { useHistory } from 'react-router-dom';
import './ForgotPassword.css'

const ForgotPassword = ()=>{

    let history = useHistory();

    const goSignin =(()=>{
        history.push('/signin')

    })

    return(
        <form className=" background  br3 ba b--black-10 mv4 w-100 w-50-m  mw6 shadow-5 center">
        <div className=" pa4">
            <label className=''> Email address </label>
            <input className='' type='text'></input>
            <button className=' grow'>reset</button>
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

export default ForgotPassword; 