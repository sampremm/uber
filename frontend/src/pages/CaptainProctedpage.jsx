import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const CaptainProtectedPage = ({ children }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true); // Start loading by default

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setIsLoading(false); 
        }
      } catch (err) {
        localStorage.removeItem('token'); 
        navigate('/captain-login'); 
        console.error(err);
      }
    };

    fetchProfile();
  }, [token, navigate]);

  if (isLoading) {
    return (
      <Toaster>
        <p>Loading...</p>
      </Toaster>
    );
  }

  return <>{children}</>;
};

export default CaptainProtectedPage;
