import React from 'react'
import './Login.css'

const Login = () => {
    return(
        <div className='login-form'>
            <span className='title'>Login</span>
            <input type='email' placeholder='Email' className='email'/>
            <input type='password' placeholder='Password'className='password'/>
            <button type="button" className='login' onClick={()=>alert('Hello')}>Login</button>
            <footer className='footer'>Don’t have an account yet?<a href='#'>Register</a></footer>
        </div>
    )
}

export default Login