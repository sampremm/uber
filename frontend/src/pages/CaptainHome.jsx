import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import bike from '../assets/img/bikeuber.webp'
import auto from '../assets/img/autouber.webp'
import car from '../assets/img/BlackSUV.webp'
import logo from '../assets/img/Uberlogo.svg'
import Captaindetails from '../components/Captaindetails'
import Ridepopup from '../components/Ridepopup'
import { useReducer } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ComfirmRidepopup from '../components/ComfirmRidepopup.JSX'


const CaptainHome = () => {
  const [ridepopupPanel, setRidepopupPanel] = useState(true);
  const [ComfirmridepopupPanel, setComfirmridepopupPanel] = useState(false);
  const rideComfirmpopupPanelRef = useRef();
  const ridepopupPanelRef= useRef();


  useGSAP(function(){
    if(ridepopupPanel){
      gsap.to(ridepopupPanelRef.current, {
        transform: 'translateY(0%)',
      })
    }else{
      gsap.to(ridepopupPanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  },[ridepopupPanel])

  useGSAP(function(){
    if(ComfirmridepopupPanel){
      gsap.to(rideComfirmpopupPanelRef.current, {
        transform: 'translateY(0%)',
      })
    }else{
      gsap.to(rideComfirmpopupPanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  },[ComfirmridepopupPanel])
  return (
  <div className='h-screen overflow-hidden '>
        <div className='fixed p-4 top-0 flex items-center justify-between w-screen '>
          <img className='w-16 ' src={logo}/>
          <Link to={'/'} className=' right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full '> 
            <i className=" text-lg font-bold text-2xl font-thin  ri-logout-box-line"></i>
          </Link>
        </div>  
        <div className='h-1/1.5 '>
            <img className='h-full w-full object-cover'src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif'></img>
        </div>
        <div className='h-2/5  p-6 '>
         <Captaindetails/>
        </div>
      <div ref={ridepopupPanelRef} className='fixed w-full z-10 bottom-0 mb-2 translate-y-full bg-white px-3 py-10 pt-12'>
        <Ridepopup setRidepopupPanel={setRidepopupPanel}  setComfirmridepopupPanel={setComfirmridepopupPanel} />
       </div>
       <div ref={rideComfirmpopupPanelRef} className='fixed w-full z-10 bottom-0 mb-2 translate-y-full bg-white px-3 py-10 pt-12'>
        <ComfirmRidepopup setComfirmridepopupPanel={setComfirmridepopupPanel} setRidepopupPanel={setRidepopupPanel}/>
       </div>
    </div>
  )
}

export default CaptainHome