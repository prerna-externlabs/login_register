import React,{useState} from 'react';
import "../register/register.css"

const Register  = (props) =>{



  const [fromdata,setFormdata] = useState({
    name:"",
    email:"",
    password : "",
    phone : "",
    confpass : ""
  })
  const handlesubmit = (e) => {
    const { name, value } = e.target;
    setFormdata(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  const submits = (e) =>{
    e.preventDefault();
    console.log(fromdata);

  }
    return(
      <div className='auth-form-container'>
      <h1>Register Now</h1>

        <form className='register-form' onSubmit={submits}>
          <label for='name'>Name</label>
          <input type="text" placeholder='enter your name' id='name' name='name' value={fromdata.name} onChange={handlesubmit}/>
          <label for='email'>Email</label>
          <input type="text" placeholder='youremail@email.com' id='email' name='email' value={fromdata.email} onChange={handlesubmit}/>
          <label for='phone'>Phone NO.</label>
          <input type="number" placeholder='enter your phone no.' id='phone' name='phone' value={fromdata.phone} onChange={handlesubmit}/>
          <label for='password'>Password</label>
          <input type="password" placeholder='enter your password' id='password' name='password' value={fromdata.password} onChange={handlesubmit}/>
          <label for='password'>Confirm Password</label>
          <input type="password" placeholder='enter your confirm password' id='confpass' name='confpass' value={fromdata.confpass} onChange= {handlesubmit}/>
          <button type='submit'>Register Now </button>
        </form>
        <button className='link-button' onClick={() => props.onFormSwitch('login')}>Already have an account? <span>login</span> now</button>
       
        </div>
    );
}

export default Register;

