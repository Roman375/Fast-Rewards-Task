import React from 'react'
import './Register.css'

const Register = () => {
    return(
        <div className='register-form'>
            <span className='title'>Register</span>
            <input type='text' placeholder='First Name' className='first-name'/>
            <input type='text' placeholder='Last Name'className='last-name'/>
            <input type='email' placeholder='Email' className='email'/>
            <input type='password' placeholder='Password'className='password'/>
            <button type="button" className='sing-up' onClick={()=>alert('Hello')}>Sign up</button>
            <footer className='footer'>Already registered?<a href='#'>Log in</a></footer>
        </div>
    )
}

export default Register