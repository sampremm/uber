import React from 'react'

const  Captaindetails = () => {
  return (
    <div>
         <div className='flex items-center justify-between'>
            <div className='flex items-center justify-start gap-3'>
              <img className='w-20 h-20 rounded-full object-cover' src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" alt="" />
              <h4 className='text-lg font-medium '>harsh patal</h4>              
            </div>
            <div>
              <h4 className='text-xl font-semibold '>103</h4>
               <p className='text-sm bg-gray-400'>Earned </p>
            </div>
          </div>
          <div className='flex items-start justify-between gap-3 mt-6 p-3  bg-gray-100 rounded-md'>
            <div className='text-center'>
            <i className=" text-2xl font-thin  ri-time-line"></i>
              <h5 className='text-lg font-medium '>10.2</h5>
              <p className='text-sm text-gray-600'>hours Online</p>
            </div>
            <div  className='text-center'>
            <i className="text-2xl font-thin  ri-speed-up-line"></i>
            <h5 className='text-lg font-medium '>10.2</h5>
            <p className='text-sm text-gray-600 '>hours Online</p>
            </div>
            <div  className='text-center' >
            <i className="text-2xl font-thin  ri-sticky-note-2-line"></i>
            <h5 className='text-lg font-medium '>10.2</h5>
            <p className='text-sm text-gray-600'>hours Online</p>
            </div>
          </div>
    </div>
  )
}

export default  Captaindetails