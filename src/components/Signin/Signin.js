import React,{useState,useEffect} from 'react';
import { Link, useHistory,withRouter  } from 'react-router-dom';
import './Signin.css'


const Signin = ({onSigninOut, setUser})=>{
     
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    let history = useHistory();

    const onEmailChange =((event)=>{
         setEmail(event.target.value);
    })

    const onPasswordChange =((event)=>{
       setPassword(event.target.value)
    })
    
    const goToRegistration= (()=>{
        history.push("/registration");
        onSigninOut(true)
        
     })

     const goForgotPassword =(()=>{
         history.push("/forgotPassword");
         onSigninOut(true);
     })

    const onSubmitSignIn =(()=>{
        // send password and email to server
        fetch('http://localhost:3000/signin', {
            method:'post',
            headers:{'content-Type':'application/json'},
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(response => response.json())
        .then(user =>{
            if (user.id){
                loadUser(user);
                onSigninOut(true);
                history.replace("/");
            }
        })
     })

     const loadUser =((user)=>{
         setUser({
            id: user.id,
            name: user.name,
            email: user.email,
            number_faces: user.number_faces,
            ranking:user.ranking,
            joined: user.joined
         })
     })

    

     
    return (
          <article className="background br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
              <main className="pa4 black-80">
                  <div className="measure">
                      <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                          <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                          <div className="mt3">
                              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                               type="email" 
                               name="email-address"
                                id="email-address"
                                onChange = {onEmailChange} />
                          </div>
                          <div className="mv3">
                              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                              type="password" 
                              name="password" 
                              id="password" 
                              onChange = {onPasswordChange}/>
                          </div>
                      </fieldset>
                      <div className="">
                          <input 
                          // I have created an arrow function so the function is called just when onClick not when the app render
                          onClick = {onSubmitSignIn}
                          className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                          type="submit" value="Sign in" />
                      </div>
                      <div className="mt3 center">
                          <p onClick ={goToRegistration}  
                          className="f6 link dim black db pointer">Register</p>
                      </div>
                      <div className="center">
                         <p onClick={goForgotPassword}
                          className="f6 link dim black db pointer">Forgot password?</p>
                    </div>
                  </div>
              </main>
          </article>
  
      );
}

export default withRouter (Signin)