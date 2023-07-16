import React from 'react'

function Login() {
  return (
    <div className="login">
        <div className="login-first">
        <h2>Sign In</h2>
        <form>
          <p className="login-p">Email :</p>
          <input className="ip" type = "text" placeholder="Enter your email"></input>
          <p className="login-p">Password :</p>
          <input className="ip" type = "password" placeholder="Enter your password"></input>
          <div className="login-last">
          <div className="login-remember">
          <input className="ip2" type = "checkbox"></input>
          <p>Remember Me</p>
          </div>
          <p>Forgot Password?</p>
          </div>
          <button className="but">Sign in</button>
        </form>
        </div>
    </div>
  )
}

export default Login