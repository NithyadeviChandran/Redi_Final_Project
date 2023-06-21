import React from 'react'
import {useNavigate} from 'react-router-dom'

function Register() {
  const navigate = useNavigate()
  const submitHandler=(e)=> {
    e.preventDefault()
    const name = e.target.name.value
    console.log(name)
    const email = e.target.email.value
    console.log(email)
    const password = e.target.password.value
    console.log(password)
    const confirmpassword = e.target.confirmpassword.value
    console.log(confirmpassword)
    if(password==confirmpassword){
      navigate('/profile')
    }
  }



  return (
    <div className='min-h-screen'>
        <form className="form-control" onSubmit={submitHandler}>
          <input type="text" placeholder="enter your name" className="input input-bordered"  />
          <input type="email" name="email" placeholder="email" className="input input-bordered" />
          <input type="password" name="password"  placeholder="password" className="input input-bordered" />
          <input type="password" name="confirmpassword" placeholder="confirm password" className="input input-bordered" />
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        </form>
    </div>
  )
}

export default Register