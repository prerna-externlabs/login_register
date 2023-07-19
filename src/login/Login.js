import React, { useState } from 'react';
import "../login/login.css"

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const submits = (e) => {
    e.preventDefault();

  }


  return (
    <div className='auth-form-container'>
      <h1>Login Now</h1>

      <form className='login-form' onSubmit={submits}>
        <label for='email'>Email</label>
        <input type="text" placeholder='youremail@email.com' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <label for='password'>Password</label>
        <input type="password" placeholder='enter your password' id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type='submit'>Login </button>
      </form>
      <button className='link-button' onClick={() => props.onFormSwitch('register')}>Don't have account ? <span>Register</span> here</button>
      {/* <button className='link-button' onClick={() => props.onFormSwitch('register')}>Don't have account ? Register here</button>  */}
    </div>
  );

}

export default Login;