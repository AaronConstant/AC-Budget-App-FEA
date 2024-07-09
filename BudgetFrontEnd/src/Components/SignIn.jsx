import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { nanoid } from 'nanoid'
import '../Styling/SignIn.scss'


export default function SignIn() {
  const API = import.meta.env.VITE_BASE_URL

  const [userLogIn, setUserLogIn] = useState({
    id: nanoid(8),
    username: '',
    password: '',
    remember: false,
    auth: false
  })

  const monitorChange = (e) => {
    setUserLogIn(prevState => ({
        ...prevState,
        [e.target.name]: e.target.value
    }))
}


  return (
    <main>
      <form className='signIn-Form'>
        <strong>
          <label htmlFor="username">Username:</label>
        </strong>
        <input 
        type="text"
        placeholder='Username'
        id='username'
        name='username'
        value={ userLogIn.username } 
        onChange={ monitorChange }
        required
        />
        <strong>
          <label htmlFor="password">Password:</label>
        </strong>
        <input 
        type="password"
        placeholder='Password'
        id='password'
        name='password'
        value={ userLogIn.password }
        onChange={ monitorChange }
        required        
            />
        <div className="remember-forgot">
          <Link to='/transactions'>
        <button type='submit'>Login</button>  
          </Link>
          <label htmlFor="">
            <input type="checkbox" />
            Remember me
            </label>
            <a href="#" style={{color: 'blue'}}>Forgot Password?</a>
        </div>


         <div className="register-link">
           <p>Don't Have Account?</p> <a href="#"style={{color: 'blue'}}>Register Here</a>
         </div>
      </form>
    </main>
  )
}
