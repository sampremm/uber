import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignup from './pages/CaptainSignup';
import Start from './pages/Start';
import UserProtectedPages from './pages/UserProtectedPages';
import UserLogout from './pages/UserLogout';
import CaptainHome from './pages/CaptainHome';
import CaptainProctedpage from './pages/CaptainProctedpage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route
          path="/home"
          element={
            <UserProtectedPages>
              <Home />
            </UserProtectedPages>
          }
        />
        <Route
          path="/user/logout"
          element={
            <UserProtectedPages>
              <UserLogout />
            </UserProtectedPages>
          }
        />
        <Route path="/captain-home" element={<CaptainProctedpage>
          <CaptainHome />
        </CaptainProctedpage>} />
      </Routes>
    </div>
  );
};

export default App;
