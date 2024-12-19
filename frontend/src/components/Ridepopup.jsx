import React from 'react'



const Ridepopup = (props) => {
  return (
    <div>
         <h5 onClick={() => props.setRidepopupPanel(false)} className="p-2 text-center absolute top-0 left-0 w-full">
            <i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
              </h5>
        
              <h3 className="text-2xl font-semibold mb-5 text-center">new ride avilable!</h3>
            <div className='flex items-center justify-between  mt-3 p-2 bg-yellow-300 rounded-xl'>
              <div className='flex items-center justify-between gap-3'>
                <img className="h-12 w-12 rounded-full object-cover"src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg " alt="" />
                <h4 className='text-lg font-medium'>emmya</h4>
              </div>
              <h5 className='text-lg font-semibold'>3.4 KM </h5>
             </div>
              <div className="flex flex-col gap-2 items-center">

                <div className="w-full mt-5">
                  <div className="flex items-center gap-5 p-3 border-b-2">
                    <i className="ri-map-pin-user-fill"></i>
                    <div>
                      <h3 className="text-lg font-medium">4-5-197/N</h3>
                      <p className="text-gray-600 text-sm -mt-1">Subhash Nagar</p>
                    </div>
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
                </div>
        
                <button onClick={() =>{ props.setComfirmridepopupPanel(true ),props.setRidepopupPanel(false)}}
                className="w-full mt-5 bg-green-500 text-white font-semibold rounded-xl p-2">
                Accept
                
                </button>
                <button onClick={() => props.setRidepopupPanel(false)}
                className="w-full mt-5 bg-gray-100 text-black font-semibold rounded-xl p-2">
                Ignore
                </button>
         </div>
    </div>
  )
}

export default Ridepopup