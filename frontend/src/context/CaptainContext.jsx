import React, { createContext, useContext, useState } from 'react'

export const CaptainDataContext = createContext();

const CaptainContext = ({children}) => {

    const [captain, setCaptain] = useState(null);
    const [isloading , setisloading] = useState(false);
    const [error , setError] = useState(null);

    const updatecaptain = (captaindata) => {
        setCaptain(captaindata);
    }

    const value={
        captain,
        setCaptain,
        isloading,
        setisloading,
        error,
        setError,
        updatecaptain
    };

  return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
  )
}

export default CaptainContext