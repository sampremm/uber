import React, { useRef, useState } from 'react'
import logouber from '../assets/img/Uberlogo.svg'
import {useGSAP} from '@gsap/react'
import {gsap} from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VechilePaneluser from '../components/VechilePaneluser'
import ComfirmRide from '../context/ComfirmRide'
import Lockingfordriver from '../components/Lockingfordriver'
import WaitingforDriver from '../components/WaitingforDriver'
 

const Home = () => {

  const [pickup,setPickup]= useState('')
  const [destination,setDestination]= useState('')
  const [panelopen,setPanelopen]= useState(false);
  const panelRef = useRef(null );
  const Vechilepanelref=useRef(null);
  const comformrideref=useRef(null);
  const VechileFoundref=useRef(null);
  const WaitingforDriverref=useRef(null);
  const panelCloser = useRef(null);
  const[VechilePanel,setVechilePanel]= useState(false);
  const[comformride,setcomformride]= useState(false);
  const[VechileFound,setVechileFound]= useState(false);
  const[Waitingfordriver,setWattingfordriver]=useState(false);



  const submitHandler = (e) => {
    e.preventDefault();
  }
  useGSAP(function(){
    if(panelopen){
      gsap.to(panelRef.current, {
        height : '70%',
        padding:5
      })
      gsap.to(
        panelCloser.current,{
          opacity : 1
        }
      )
    }else{
      gsap.to(panelRef.current, {
        height : '0%',
        padding:5
      })
      gsap.to(panelCloser.current,{
        opacity : 0
      })
    }
},[panelopen])

  useGSAP(function(){
    if(VechilePanel){
      gsap.to(Vechilepanelref.current, {
        transform: 'translateY(0%)',
      })
    }else{
      gsap.to(Vechilepanelref.current, {
        transform: 'translateY(100%)',
      })
    }
  },[VechilePanel])

  useGSAP(function(){
    if(comformride){
      gsap.to(comformrideref.current, {
        transform: 'translateY(0%)',
      })
    }else{
      gsap.to(comformrideref.current, {
        transform: 'translateY(100%)',
      })
    }
  },[comformride])

  useGSAP(function(){
    if(VechileFound){
      gsap.to(VechileFoundref.current, {
        transform: 'translateY(0%)',
      })
    }else{
      gsap.to(VechileFoundref.current, {
        transform: 'translateY(100%)',
      })
    }
  },[VechileFound])

  useGSAP(function(){
    if(Waitingfordriver){
      gsap.to(WaitingforDriverref.current, {
        transform: 'translateY(0%)',
      })
    }else{
      gsap.to(WaitingforDriverref.current, {
        transform: 'translateY(100%)',
      })
    }
  },[Waitingfordriver])



  return (
    <div className='h-screen relative'>
       <img className='w-16 absolute left-5 right-5' src={logouber}/>
       <div onClick={() => setVechilePanel(false)} className='wh-screen w-screen'>
           {/* image for template  */}
        <img className='h-screen w-screen object-cover'src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif'></img>
       </div>

       <div className=' h-screen flex flex-col justify-end absolute top-0 w-full '>

        <div className='h-[30%] p-5 bg-white relative '>
        <h5
        ref={panelCloser}
        onClick={() => setPanelopen(false)}
         className='absolute  opacity-0 top-6 right-6 text-2xl'> 
        <i className="ri-arrow-down-wide-line"></i>
        </h5>
        <h4 className='text-2xl font-semibold '>Find a trip</h4>
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
        <div ref={panelRef} className='h-0 bg-white  '>
        <LocationSearchPanel  setPanelopen={setPanelopen} setVechilePanel={setVechilePanel}/>
        </div>
       </div>
       <div ref={Vechilepanelref} className='fixed w-full z-10 bottom-0 mb-2 translate-y-full bg-white px-3 py-10 pt-12'>
       <VechilePaneluser setcomformride={setcomformride} setVechilePanel={setVechilePanel}/>
       </div>

       <div  ref={comformrideref} className='fixed w-full z-10 bottom-0 mb-2 translate-y-full bg-white px-3 py-6 pt-12'>
      <ComfirmRide  setcomformride={setcomformride} setVechileFound={setVechileFound} setVechilePanel={setVechilePanel}/>
       </div>

       <div ref={VechileFoundref} className='fixed w-full z-10 bottom-0 mb-2 translate-y-full bg-white px-3 py-6 pt-12'>
        <Lockingfordriver setcomformride={setcomformride} setVechileFound={setVechileFound}/>
       </div>
       <div ref={WaitingforDriverref} className='fixed w-full z-10 bottom-0 mb-2 translate-y-full bg-white px-3 py-6 pt-12'>
        <WaitingforDriver setWattingfordriver={Waitingfordriver}/>
       </div>
    </div>
  )
}

export default Home