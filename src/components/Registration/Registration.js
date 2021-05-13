import React, {useState ,useEffect} from 'react';
import {useHistory, withRouter } from 'react-router-dom';
import './Registration.css'

const Registration = ({ setUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorName, setErrorName] =useState(false);
    const[errorEmail, setErrorEmail] = useState(false);
    const [emailAlreadyExists , setEmailAlreadyExists ] = useState(false);

    let history = useHistory();

    const onEmailChange =((event)=>{
        setEmail(event.target.value);
   });

   const onPasswordChange =((event)=>{
      setPassword(event.target.value);
   });

   const onNameChange = ((event)=>{
        setName(event.target.value);

   });

    const goSignin = (() => {
        history.push('/')
    });

    const onSubmitRegistration = (() => {
        
        setErrorEmail(false);
        setErrorPassword(false);
        setErrorName(false);
        setEmailAlreadyExists (false);
    
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
            .then(res => {
                if (res.id) {
                    loadUser(res );
                    history.push("/home");
                }else{
                for(let i =0; i < res.errors.length; i++)   {
                    console.log(res.errors[i].param)
                    if(res.errors[i].param ==='name'){
                        
                        setErrorName(true);
                    }else if (res.errors[i].param ==='email'){
                        setErrorEmail(true);
                       
                    }else if (res.errors[i].param ==='password'){
                        setErrorPassword(true);
                    }else{
                        setEmailAlreadyExists (true);
                    }
                } 
                }
            })
    });

    const loadUser = ((user) => {
        setUser({
            id: user.id,
            name: user.name,
            email: user.email,
            number_faces: user.number_faces,
            ranking:user.ranking,
            joined: user.joined
        })
    });

    return (
        <article className="reg_bg  br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
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
                            {errorName && <p className='f7'>Name must contain just letters</p>}
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="email"
                                name="email-address"
                                id="email-address"
                                onChange={onEmailChange} />
                            {errorEmail && <p className='f7'>Email invalid</p>}
                            {emailAlreadyExists && <p className='f7'>There is already an account with this email</p>}
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="password"
                                name="password"
                                id="password"
                                onChange={onPasswordChange} />
                            {errorPassword && <p className='f7'>Password must contain just number and letters</p>}
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