import React, {useContext, useEffect } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
const UserProtectedPages = ({children}) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const {captain, setCaptain} = useContext(CaptainDataContext);
    useEffect(() => {
        if(!token){
            navigate('/login')
        }
    },[token])
  return (
    <>
        {children}
    </>
  )
}

export default UserProtectedPages