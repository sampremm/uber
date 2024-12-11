import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logouber from '../assets/img/Uberlogo.svg';
import { UserDataContext } from '../context/UserContext.jsx';

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const newUser = {
        fullname: {
          firstname: firstname,
          lastname: lastname,
        },
        email: email,
        password: password,
      };

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/register`, newUser);
      if (response.status === 201) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token', data.token);
        navigate('/home');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      console.log(error);
      
    }

    setEmail('');
    setPassword('');
    setFirstname('');
    setLastname('');
  };

  return (
    <div>
      <div className="p-7 flex h-screen flex-col justify-between">
        <div>
          <img className="w-16 mb-10" src={logouber} alt="Uber Logo" />
          <form onSubmit={(e) => submitHandler(e)}>
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
              type="Password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            >
              Create account
            </button>
          </form>
          <p className="text-center">
            Already have an account? <Link to={'/login'} className="text-blue-600">Login here</Link>
          </p>
        </div>
        <div>
          <p className="text-xs leading-tight">
            By proceeding you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number you provided.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
