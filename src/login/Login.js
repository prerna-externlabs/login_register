import React, { useState } from 'react';
import "../login/login.css"

const Login = (props) => {
  const [fromdata,setFormdata] = useState({
    email:"",
    password : "",
  })

  const handlesubmit = (e) => {
    const { name, value } = e.target;
    setFormdata(prevData => ({
      ...prevData,
      [name]: value
    }));
  }


  const submits = (e) => {
    e.preventDefault();
    console.log(fromdata);

  }


  return (
    <div className='auth-form-container'>
      <h1>Login Now</h1>

      <form className='login-form' onSubmit={submits}>
        <label for='email'>Email</label>
        <input type="text" placeholder='youremail@email.com' id='email' name='email' value={fromdata.email} onChange={handlesubmit} />
        <label for='password'>Password</label>
        <input type="password" placeholder='enter your password' id='password' name='password' value={fromdata.password} onChange={handlesubmit} />
        <button type='submit'>Login </button>
      </form>
      <button className='link-button' onClick={() => props.onFormSwitch('register')}>Don't have account ? <span>Register</span> here</button>
     
    </div>
  );

}

export default Login;