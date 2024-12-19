import React from 'react'
import bike from '../assets/img/bikeuber.webp'
import auto from '../assets/img/autouber.webp'
import car from '../assets/img/BlackSUV.webp'

const VechilePaneluser = (props) => {
  return (
    <div>  
    <h5 onClick={() => props.setVechilePanel(false)} 
       className='p-2 text-center absolute top-0 w-[93%] '><i className=" text-3xl text-gray-200  ri-arrow-down-wide-fill"></i></h5>
    <h3 className='text-2xl font-semibold mb-2 '>Choose a Vechile</h3>
           <div onClick={() => {
            props.setcomformride(true)    
            props.setVechilePanel(false)
            }              
           } className="flex w-full items-center  justify-between px-3 py-6 mb-1 border rounded-xl  active:border-black">
              <img src={car} className='h-14'/>
              <div className='ml-2 w-1/2 '>
                <h4 className='font-medium text-base'> Ubergo <span><i className="ri-user-fill"></i>4</span></h4>
                <h5 className='font-medium text-sm'> 2 min </h5>
                <p className='font-normal text-xs text-grey-600'>affordable comfort rides</p>
              </div>
              <h2 className='text-lg font-semibold'><p>₹193 </p></h2>
            </div>
    
              {/* bike */}
    
    <div onClick={() => {
            props.setcomformride(true)    
            props.setVechilePanel(false)
            }              
           }  className="flex w-full items-center justify-between px-3 py-6 mb-2 pt-14 border rounded-xl  active:border-black">
              <img src={bike} className='h-14'/>
              <div className='w-1/2 '>
                <h4 className='font-medium text-base'>moto<span><i className="ri-user-fill"></i>1</span></h4>
                <h5 className='font-medium text-sm'> 2 min </h5>
                <p className='font-normal text-xs text-grey-600'>affordable motorcycle rides</p>
              </div>
              <h2 className='text-lg font-semibold'><p>₹90 </p></h2>
            </div>
            
    
              {/* auto */}
    
    <div onClick={() => {
            props.setcomformride(true)    
            props.setVechilePanel(false)
            }              
           }   className="flex w-full items-center justify-between px-3 py-6 mb-2 pt-14 border rounded-xl active:border-black">
              <img src={auto} className='h-14'/>
              <div className='ml-2 w-1/2 '>
                <h4 className='font-medium text-base'> UberAuto <span><i className="ri-user-fill"></i>3</span></h4>
                <h5 className='font-medium text-sm'> 2 min </h5>
                <p className='font-normal text-xs text-grey-600'>affordable auto rides</p>
              </div>
              <h2 className='text-lg font-semibold'><p>₹130</p></h2>
            </div>
    </div>
  )
}


export default VechilePaneluser;