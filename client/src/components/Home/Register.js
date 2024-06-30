
import React, { useState } from 'react'
import './Login.css'
// import {toast} from 'react-toastify'


export const Register = () => {


    const [user,setUser]=useState({
      name:"",
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
          const result=await fetch('http://localhost:5500/register',{
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify(user)
          })

            if(result.ok)
            {

              alert('Registration successful')
              setUser({name:'',email:'',role:'',password:''})
            }else{
              alert('registration failed')
            }
            
          } catch (error) {

        alert('registration failed')
      }
    }


  return (
    <>
        <div className="wrapper">
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
        <div className="input-field">
        <input type="text" name='name' value={user.name} onChange={handleChange} required/ >
        <label>Your Name</label>
      </div>
        <div className="input-field">
        <input type="email" name='email' value={user.email} onChange={handleChange} required/>
        <label>Your email</label>
      </div>
       
      <div className="input-field">
        <input type="password" name='password' value={user.password} onChange={handleChange} required/>
        <label> Your password</label>
      </div>
     
      <button type="submit">Register</button>
      <div className="register">
        <p>Already have an account? <a href="/">Login</a></p>
      </div>
    </form>
  </div>
    </>
  )
}
