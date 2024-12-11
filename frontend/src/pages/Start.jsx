import React from 'react'
import { Link } from 'react-router-dom' 
import logo from '../assets/img/cover.jpg'
import uberlogo from '../assets/img/Uberlogo.svg'

const Start = () => {
  return (
    <div>
        <div className='bg-cover bg-center  h-screen pt-8 flex justify-between  flex-col w-full'
        style={{ backgroundImage: `url(${logo})` }}>
        <img className='w-16 ml-8' src={uberlogo}></img>
            <div className='bg-white pb-7 py-4  px-4 '>
                <h2 className='text-3xl font-bold '>get started with uber</h2>
                <Link to={'/login'} className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
           </div>
        </div>
    </div>
  )
}

export default Start