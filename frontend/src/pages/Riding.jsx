import React from 'react'
import { Link } from 'react-router-dom'
import bike from '../assets/img/bikeuber.webp'
import auto from '../assets/img/autouber.webp'
import car from '../assets/img/BlackSUV.webp'

const Riding = () => {
  return (
    <div className='h-screen '>
        <Link to={'/home'} className='fixed  right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full '> 
        <i className=" text-lg font-bold ri-home-8-line"></i>
        </Link>
        <div className='h-1/2'>
            <img className='h-full w-full object-cover'src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif'></img>
        </div>
        <div className='h-1/2 p-4 '>
                  <div className="flex items-center justify-between">
                    <img src={car} alt="Car Ride" className="h-20" />
                
                     <div className='text-right'>
                                        <h2 className='text-lg font-medium'>Sam</h2>
                                        <h4 className='text-xl'>Mp 04 AE 9182</h4>
                                        <p className='text-sm text-grey-600'>BMW series-8</p>
                                    </div>
                                    </div>
                                    <div className="w-full mt-5">

                                    </div>
                                
                                          <div className="flex items-center gap-5 border-b-2 p-3">
                                            <i className="text-lg ri-map-pin-line"></i>
                                            <div>
                                              <h3 className="text-lg font-medium">4-5-197/N</h3>
                                              <p className="text-gray-600 text-sm -mt-1">Subhash Nagar</p>
                                            </div>
                                    </div>
                                
                                          <div className="flex items-center gap-5 p-3">
                                            <i className="ri-currency-line"></i>
                                            <div>
                                              <h3 className="text-lg font-medium">₹193</h3>
                                              <p className="text-gray-600 text-sm -mt-1">Cash</p>
                                            </div>
                                    </div>
                                    
                                    <button className="w-full mt-5 bg-green-500 text-white font-semibold rounded-xl p-2" 
                                    >Make a Payment</button>
        </div>
    </div>
  )
}

export default Riding