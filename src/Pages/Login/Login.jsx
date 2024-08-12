import React from 'react'
import img from '../../assets/images/login/login.svg'

function Login() {

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('login')
    }

  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">

    <div className="text-center lg:text-left w-1/2 mr-20">
      <img src={img} alt="login image" />
    </div>

    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleLogin}>
      <h1 className="text-5xl font-bold text-center">Login</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type="submit" value="Login" className="btn btn-error" />
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default Login
