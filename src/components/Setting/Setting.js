import React,{useState} from 'react';
import { Link, useHistory,withRouter  } from 'react-router-dom';
import './Setting.css'

const Setting =({user})=>{

    const [name, setName] = useState('');
    const[updateNameErr, setUpdateNameErr] = useState(false);

    
    let history = useHistory();

    const onNameChange = ((event)=>{
         setName(event.target.value)
    })

    const onResetPassword =(()=>{
        history.push('/forgotPassword')
    })

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

   })

   const onDeleteUser =(()=>{

   })


    return(
       
       <div className=" background  br3 ba b--black-10 mv4 w-100 w-50-m  mw6 shadow-5 center">
          <div className=" container pa4">
              <label className='labelForm'>Name</label>
              <input className='inputForm' type='text' placeholder={user.name} onChange={onNameChange}></input>
              <button className='btn grow'onClick={onEditName}>Save</button>
              {updateNameErr && <p>Name must be alphanumeric and cannot be null</p>}

              <lable className='margingTop labelForm'>Change password?</lable>
              <button className='btn margingTop grow'onClick={onResetPassword}>Reset</button>
             
              <lable className='margingTop labelForm'>Delete account</lable>
              <button className='btn margingTop  grow'onClick={onDeleteUser}>Delete</button>
        
        </div>   
       </div>
    
    )
}

export default withRouter(Setting)

/*
***************************
 <div className=" form  shadow-5 center">
          
          <div className='align center pa2'>
              <label className='text w-10 '>Name</label>
              <input className='w-50' type='text'></input>
              <button className=''>Save</button>
          </div>  
          <div className=' align center  pa2 '>
              <lable className='w-70 text'>Reset face counting?</lable>
              <button>Yes</button>
          </div>
          <div className='align center pa2'>
              <lable className='w-70 text'>Change password?</lable>
              <button className=' w-15 grow'>Yes</button>
          </div>    
          
       </div>
*********************
      <div className="br3 ba b--black-10 mv4 w-100 w-50-m  mw6 shadow-5 center">
           <div className="form pa4 black-80">
               <div>
               <label >Name</label>
               </div>
               <div className = 'center pa4 br3'>
              <input className='pa2 w-70 fa4 center' type ='text' ></input>
              <button className='center w-30 grow f4 link ph3 pv2 dib white bg-green' > Save</button>
             </div>  
           </div>
    </div>
*/