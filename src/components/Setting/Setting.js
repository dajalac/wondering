import React,{useState,useEffect} from 'react';
import {useHistory,withRouter  } from 'react-router-dom';
import './Setting.css'

const Setting =({user})=>{

    const [name, setName] = useState('');
    const[updateNameErr, setUpdateNameErr] = useState(false);
    const[deleteError, setDeteError] = useState(false);

    
    let history = useHistory();

    const onNameChange = ((event)=>{
         setName(event.target.value)
    });

    const onResetPassword =(()=>{
        history.push('/forgotPassword')
    });

   const onEditName =(()=>{
    fetch('http://localhost:3000/updateName', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: name,
          id: user.id
        })
      })
  .then (response => response.json())
  .then(response=>{
      if(response.message ==='name updated'){
         setUpdateNameErr(false)
         alert('Name updated with sucess!')
      }else{
          setUpdateNameErr(true)
      }
  })

   });

   const onDeleteUser =(()=>{
        if(window.confirm('Are you sure you want to delete account?')){
        fetch('http://localhost:3000/deleteUser', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          id: user.id
        })
      })
  .then (response => response.json())
  .then(response=>{
      if(response.message === 'user deleted'){
          history.push('/')
      }
      else{
          setDeteError(true)
      }

  })
    }
   })


    return(
       
       <div className=" background  br3 ba b--black-10 mv4 w-100 w-50-m  mw6 shadow-5 center">
          <div className=" container pa4">

              <label className='labelForm'>Name</label>
              <input className='inputForm' type='text' placeholder={user.name} onChange={onNameChange}></input>
              <button className='btn link dib white bg-green' onClick={onEditName}>Save</button>
              {updateNameErr && <p>Name must be alphanumeric and cannot be null</p>}

              <lable className='margingTop labelForm'>Change password?</lable>
              <button className='btn margingTop grow link dib white bg-green'onClick={onResetPassword}>Reset</button>
             
              <lable className='margingTop labelForm'>Delete account</lable>
              <button className='btn margingTop  grow'onClick={onDeleteUser}>Delete</button>
              {deleteError && <p className='pForm'>Unable to delete user. Try sin in again</p>}
        
        </div>   
       </div>
    
    )
}

export default withRouter(Setting)

