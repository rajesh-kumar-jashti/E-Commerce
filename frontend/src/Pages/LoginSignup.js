import React from 'react'
import './CSS/Login.css'
import google_img from "../Components/Assets/Google.png";

const LoginSignup = () => {
  return (
    <div className='login'>
      <div className="login-body">
        <h1>Login</h1>
          <form action="">
            <input type="text" placeholder='Enter Phone Number'/>
          </form>
          <button>Get OTP</button>
          <h2>--OR--</h2>
          <div className='gle-signin'>
            <img src={google_img} alt="" />
            <button>Continue with Google</button>
          </div>
      </div>
    </div>
  )
}

export default LoginSignup
