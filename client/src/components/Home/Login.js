import React, { useState } from 'react'
import './Login.css'
// import { toast } from 'react-toastify'


export const Login = () => {



  const [user,setUser]=useState({
    email:"",
    password:""
  })

  const handleChange=(e)=>{
    const {name,value}=e.target
    setUser({
      ...user,
      [name]:value
    })
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
        const result=await fetch('http://localhost:5500/login',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(user)
        })

          if(result.ok)
          {
            alert('Login successful')
            setUser({email:'',password:''})
          }else{
            alert('Login failed')
          }
          
        } catch (error) {

      alert('Login failed')

    }
  }


  return (
   <>


  <div className="wrapper">
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
        <div className="input-field">
        <input type="email" name='email' value={user.email} onChange={handleChange} required/>
        <label>Enter your email</label>
      </div>
      <div className="input-field">
        <input type="password" name='password' value={user.password} onChange={handleChange} required/>
        <label>Enter your password</label>
      </div>
      <div className="forget">
        <label for="remember">
          <input type="checkbox" id="remember"/>
          <p>Remember me</p>
        </label>
        <a href="/">Forgot password?</a>
      </div>
      <button type="submit">Log In</button>
      <div className="register">
        <p>Don't have an account? <a href="/register">Register</a></p>
      </div>
    </form>
  </div>


   </>
  )
}
