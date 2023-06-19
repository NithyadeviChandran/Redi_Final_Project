import React from 'react'

function Register() {
  return (
    <div>
        <div className="form-control">
       
          <input type="email" placeholder="email" className="input input-bordered" />
          <input type="password" placeholder="password" className="input input-bordered" />
          <input type="password" placeholder="confirm password" className="input input-bordered" />
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        </div>
    </div>
  )
}

export default Register