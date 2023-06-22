import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function Register({}) {
  const [newuser, setnewuser] = useState({
    name:"",
    email: "",
    password: ""
  })
  const navigate = useNavigate()
  
  const submitHandler=(e)=> {
    e.preventDefault()
    const name = e.target.nam.value
    console.log(name)
    const email = e.target.email.value
    console.log(email)
    const password = e.target.password.value
    console.log(password)
    const confirmpassword = e.target.confirmpassword.value
    console.log(confirmpassword)
     const userData = {
      name: e.target.nam.value,
      email: e.target.email.value,
      password: e.target.password.value
    };

    axios.post("https://nithya-render.onrender.com/users", userData).then((response) => {
      console.log(response.status, response.data.token);
    });
    e.target.nam.value= "";
    e.target.email.value= "";
    e.target.password.value =""
    e.target.confirmpassword.value =""
    if(password==confirmpassword){
      navigate('/')
    }
  }



  return (
    <div className='min-h-screen'>
        <form className="form-control" onSubmit={submitHandler}>
          <input type="text" name="nam"placeholder="enter your name" className="input input-bordered"  />
          <input type="email" name="email" placeholder="email" className="input input-bordered" />
          <input type="password" name="password"  placeholder="password" className="input input-bordered" />
          <input type="password" name="confirmpassword" placeholder="confirm password" className="input input-bordered" />
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
        </form>
    </div>
  )
}

export default Register