import React, { userState, userEffect, useState } from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';
import './Registration.css'

const Registration = ({ setUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    let history = useHistory();

    const onEmailChange =((event)=>{
        setEmail(event.target.value);
   })

   const onPasswordChange =((event)=>{
      setPassword(event.target.value);
   })

   const onNameChange = ((event)=>{
       setName(event.target.value);
   })

    const goSignin = (() => {
        history.push('/signin')
    })

    const onSubmitRegistration = (() => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password,
                name: name
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    loadUser(user);
                    history.push("/");
                }
            })
    })

    const loadUser = ((user) => {
        setUser({
            id: user.id,
            name: user.name,
            email: user.email,
            entries: user.entries,
            joined: user.joined
        })
    })

    return (
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
                                onChange={onNameChange} />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="email"
                                name="email-address"
                                id="email-address"
                                onChange={onEmailChange} />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="password"
                                name="password"
                                id="password"
                                onChange={onPasswordChange} />
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
                        <p onClick={goSignin}
                            className="f6 link dim black db pointer">Already have an account?</p>
                    </div>
                </div>
            </main>
        </article>
    )
}

export default withRouter(Registration)