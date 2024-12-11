import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import logouber from '../assets/img/Uberlogo.svg'
import { UserDataContext } from '../context/UserContext.jsx'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})

  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(e);
   const userData = {
     email:email,
    password:password
   }

   const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/login`, userData);
   if(response.status === 200) {
     const data= response.data;
     setUser(data.user);
     localStorage.setItem('token', data.token);
     navigate('/home');
   }
    setEmail('')
    setPassword('')
  }

  return (
    <div className='p-7 flex h-screen flex-col justify-between'>
      <div>
      <img className='w-16 mb-10 ' src={logouber}></img>
      <form onSubmit={(e)=>submitHandler(e)}>
        <h3 className='text-lg font-medium mb-2'>Whats your Email</h3>
        <input required 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='bg-[#eeeeee ] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        type="email" 
        placeholder="Email@example.com" />
        <h3 className='text-xl mb-2'
        >Enter your Password</h3>
        <input 
            className='bg-[#eeeeee ] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required type="Password" placeholder="Password" />
        <button
              className='bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        >Login</button>
      </form>
      <p className='text-center'>New hear?<Link to ={'/signup'} className='text-blue-600'>Create new account</Link></p>
      </div>
      <div>
        <Link to={'/captain-login'}
         className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-7  rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        >Sign in as captain</Link>
      </div>
    </div>
  )
}

export default UserLogin