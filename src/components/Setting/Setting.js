import React,{userState, userEffect} from 'react';
import { Link, useHistory,withRouter  } from 'react-router-dom';

const Setting =()=>{
    
    let history = useHistory();

    const onSubmitRegistration =(()=>{
        console.log('hellooo')
        history.push("/");
        
     })

  


    return(
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
           <div>
               <label>Change name</label>
               
           </div>
        </main>
    </article>
    )
}

export default withRouter(Setting)