import React, { useState } from 'react'
import logouber from '../assets/img/Uberlogo.svg'
import {useGSAP} from '@gsap/react'
import {gsap} from 'gsap'

const Home = () => {

  const [pickup,setPickup]= useState('')
  const [destination,setDestination]= useState('')
  const [panelopen,setPanelopen]= useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
  }
  return (
    <div className='h-screen relative'>
       <img className='w-16 absolute left-5 right-5' src={logouber}/>
       <div className='wh-screen w-screen'>
           {/* image for template  */}
        <img className='h-screen w-screen object-cover'src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif'></img>
       </div>

       <div className=' h-screen flex flex-col justify-end absolute top-0 w-full '>

        <div className='h-[30%] p-5 bg-white '>
        <h4 className='text-2xl font-semibold '>Find a tript</h4>
        <form onSubmit={(e)=>submitHandler(e)}>
          <input 
          className='bg-[#eee] px-8 py-2 text-lg rounded-lg w-full mt-5 '
           type='text' 
           placeholder='add a pickup loacatoin'
           value={pickup}
           onChange={(e) => setPickup(e.target.value)}
           onClick={() => setPanelopen(true)}
           />
          <input  className='bg-[#eee] px-8 py-2 text-lg rounded-lg w-full mt-5 ' 
          type='text' 
          placeholder='enter your loacatoin'
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          onClick={() => setPanelopen(true)}
          />
        </form>
        </div>
        <div className='h-[70%] bg-red-500 p-5 hidden'>

        </div>
       </div>
    </div>
  )
}

export default Home