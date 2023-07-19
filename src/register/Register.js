import React,{useState} from 'react';
import "../register/register.css"

const Register  = (props) =>{

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [password,setPassword] = useState('');
  const [confpass,setConfPass] = useState('');



  const submits = (e) =>{
    e.preventDefault();
    console.log(email);

  }
    return(
      <div className='auth-form-container'>
      <h1>Register Now</h1>

        <form className='register-form' onSubmit={submits}>
          <label for='name'>Name</label>
          <input type="text" placeholder='enter your name' id='name' name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
          <label for='email'>Email</label>
          <input type="text" placeholder='youremail@email.com' id='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <label for='phone'>Phone NO.</label>
          <input type="number" placeholder='enter your phone no.' id='phone' name='phone' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
          <label for='password'>Password</label>
          <input type="password" placeholder='enter your password' id='password' name='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <label for='password'>Confirm Password</label>
          <input type="password" placeholder='enter your confirm password' id='confpass' name='confpass' value={confpass} onChange= {(e)=>setConfPass(e.target.value)}/>
          <button type='submit'>Register Now </button>
        </form>
        <button className='link-button' onClick={() => props.onFormSwitch('login')}>Already have an account? <span>login</span> now</button>
        {/* <button className='link-button' onClick={() => props.onFormSwitch('login')}>Already have an account? login now</button> */}
        </div>
    );
}

export default Register;

