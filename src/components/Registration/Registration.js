import React,{userState, userEffect} from 'react';
import { Link, useHistory,withRouter  } from 'react-router-dom';
import './Registration.css'

const Registration =()=>{
    
    let history = useHistory();

    const onSubmitRegistration =(()=>{
        console.log('hellooo')
        history.push("/");
        
     })

     const goSignin =(()=>{
         history.push('/signin')
     })

  


    return(
        <article className="background  br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
            <div className="measure">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">Register</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                         type="text" 
                         name="name" 
                         id="name"
                         onChange = {onSubmitRegistration} />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="email"
                         name="email-address" 
                         id="email-address"
                         onChange = {onSubmitRegistration} />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="password"
                        name="password"
                        id="password"
                        onChange = {onSubmitRegistration}  />
                    </div>
                </fieldset>
                <div className="">
                    <input
                        // I have created an arrow function so the function is called just when onClick not when the app render
                        onClick={onSubmitRegistration}
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                        type="submit" value="Register" />
                </div>
                <div className="lh-copy mt3">
                          <p onClick ={goSignin} 
                          className="f6 link dim black db pointer">Already have an account?</p>
                      </div>
            </div>
        </main>
    </article>
    )
}

export default withRouter(Registration)