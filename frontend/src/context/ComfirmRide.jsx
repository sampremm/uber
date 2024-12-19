import React from 'react';
import bike from '../assets/img/bikeuber.webp';
import auto from '../assets/img/autouber.webp';
import car from '../assets/img/BlackSUV.webp';

const ConfirmRide = (props) => {
  return (
    <div>
      <h5
        onClick={() => props.setVechilePanel(false)}
        className="p-2 text-center absolute top-0 left-0 w-full"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-5 text-center">Choose your ride</h3>

      <div className="flex flex-col gap-5 items-center">
        <img src={car} alt="Car Ride" className="h-20" />

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

        <button onClick={() =>{
          props.setVechileFound(true)
          props.setcomformride(false)
        }
        }className="w-full mt-5 bg-green-500 text-white font-semibold rounded-xl p-2">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;
