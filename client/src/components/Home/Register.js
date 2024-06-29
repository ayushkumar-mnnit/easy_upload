
import React from 'react'
import './Login.css'

export const Register = () => {
  return (
    <>
        <div class="wrapper">
    <form action="#">
      <h2>Login</h2>
        <div class="input-field">
        <input type="text" required/>
        <label>Your Name</label>
      </div>
        <div class="input-field">
        <input type="text" required/>
        <label>Your email</label>
      </div>
        <div class="input-field">
        <input type="text" required/>
        <label>Your role: client or youtuber</label>
      </div>
      <div class="input-field">
        <input type="password" required/>
        <label> Your password</label>
      </div>
     
      <button type="submit">Register</button>
      <div class="register">
        <p>Already have an account? <a href="/">Login</a></p>
      </div>
    </form>
  </div>
    </>
  )
}
