import React,{userState, userEffect} from 'react';
import { Link, useHistory,withRouter  } from 'react-router-dom';
import './Setting.css'

const Setting =()=>{
    
    let history = useHistory();

    const onSubmitRegistration =(()=>{
        console.log('hellooo')
        history.push("/");
        
     })

  


    return(
       
       <div className=" background  br3 ba b--black-10 mv4 w-100 w-50-m  mw6 shadow-5 center">
          <div className=" container pa4">
              <label className='labelForm'>Name</label>
              <input className='inputForm' type='text'></input>
              <button className='btn grow'>Save</button>
             
              <lable className='margingTop labelForm'>Reset face counting?</lable>
              <button className='btn margingTop  grow'>Yes</button>
         
          
              <lable className='margingTop labelForm'>Change password?</lable>
              <button className='btn margingTop grow'>Yes</button>
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