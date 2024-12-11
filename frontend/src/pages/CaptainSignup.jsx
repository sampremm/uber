import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logouber from '../assets/img/Uber-driver.svg';
import { CaptainDataContext } from '../context/CaptainContext.jsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainSignup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [vechicleColour, setVechicleColour] = useState('');
  const [vechiclePlate, setVechiclePlate] = useState('');
  const [vechicleCapacity, setVechicleCapacity] = useState('');
  const [vechicleType, setVechicleType] = useState('');

  const { captain,setCaptain } = React.useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: { 
        firstname: firstname,
         lastname: lastname 
        },
      email: email,
      password: password,
      vechicle: {
        plate: vechiclePlate,
        color: vechicleColour,
        capacity: vechicleCapacity,
        vechicleType,
      },
    };
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`, captainData);
      if (response.status === 201) {
        const data  = response.data;
        setCaptain(data.captain);
        localStorage.setItem('token', data.token);
        navigate('/captain-home');
      }
  
    setEmail('');
    setPassword('');
    setFirstname('');
    setLastname('');
    setVechicleColour('');
    setVechiclePlate('');
    setVechicleCapacity('');
    setVechicleType('');
  };

  return (
    <div className="p-7 flex h-screen flex-col justify-between">
      <div>
        <img className="w-16 mb-10" src={logouber} alt="Uber Logo" />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What's your Name</h3>
          <div className="flex justify-between gap-3">
            <input
              required
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              type="text"
              placeholder="First Name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              type="text"
              placeholder="Last Name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            required
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="Email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className="text-xl mb-2">Enter your Password</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
          <div className="flex justify-between gap-3">
            <input
              required
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              type="text"
              placeholder="Plate Number"
              value={vechiclePlate}
              onChange={(e) => setVechiclePlate(e.target.value)}
            />
            <input
              required
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              type="text"
              placeholder="Vehicle Colour"
              value={vechicleColour}
              onChange={(e) => setVechicleColour(e.target.value)}
            />
          </div>
          <input
            required
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="number"
            placeholder="Vehicle Capacity"
            value={vechicleCapacity}
            onChange={(e) => setVechicleCapacity(e.target.value)}
          />
          <select
            required
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            value={vechicleType}
            onChange={(e) => setVechicleType(e.target.value)}
          >
            <option value="" disabled>
              Select vehicle type
            </option>
            <option value="car">Car</option>
            <option value="motorcycle">Motorcycle</option>
            <option value="auto">Auto</option>
          </select>
          <button
            className="bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          >
            Create an Account as Captain
          </button>
        </form>
        <p className="text-center">
          Already have an account?{' '}
          <Link to="/captain-login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-xs leading-tight">
          By signing up, you agree to our Terms, Data Policy, and Cookies Policy.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
