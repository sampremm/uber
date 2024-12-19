import React from 'react'

const LocationSearchPanel = (props) => {

  const locations=[
    "s3-6-2965 subhahs nagar karimnagar",
    "tyc9 295/b lalaguda hyderbad mirjalguda",
    "tyc9 295/b lalaguda hyderbad mirjalguda",
    "tyc9 295/b lalaguda hyderbad mirjalguda",
    "s3-6-2965 subhahs nagar karimnagar",

  ]
  return (    
    <div>
          {
            locations.map(function(ele,ind){
              return(
                <div key={ind} onClick={()=>{
                  props.setVechilePanel(true)
                  props.setPanelopen(false)
                }}
                className='flex items-center border-2 p-3 border-gray-50 active:border-black rounded-xl justify-start gap-2 my-4   pl-3 pr-3 '>
                <h2 className=' bg-[#eee]  h-10 w-10 rounded-full  flex items-center justify-center'>
                <i className="ri-map-pin-line text"></i>
                </h2>
                <h4 className='font-medium'>{ele}</h4>
                </div>
              )
            })
          }
    </div>
  )
}

export default LocationSearchPanel