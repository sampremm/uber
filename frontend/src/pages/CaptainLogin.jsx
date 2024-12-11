import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import logouber from '../assets/img/Uber-driver.svg'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'
const CaptainLogin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

const {captain, setCaptain} = React.useContext(CaptainDataContext);
const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    const captain=({
      email:email,
      password:password})
      const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/login`,captain);
      if(response.status===200){
        const data=response.data;
        localStorage.setItem('token', data.token);
        setCaptain(data.captain);
        navigate('/captain-home');
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
      <p className='text-center'>Join a fleet?<Link to ={'/captain-signup'} className='text-blue-600'>Register as a captain</Link></p>
      </div>
      <div>
        <Link to={'/login'}
         className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-7  rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        >Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin