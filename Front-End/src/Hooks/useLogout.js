import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../Context/AuthContext';

const useLogout = () => {
  const [loading,setLoading]=useState(false)
  const {setAuthUser} = useAuthContext()
  const logout = async()=>{
    try {
        const res = await fetch("/api/auth/logout",{
            method:"POST",
            headers:{"content-Type":"application/json"}
        });

        const data =await res.json()
        if(data.error){
            throw new Error(data.error)
        }
        localStorage.removeItem("chat-user")
        setAuthUser(null);
        toast.success("logout sucessful")
    } catch (error) {
        toast.error("Unable to logout")
    }
    finally{
        setLoading(false)
    }
  }
  return {loading,logout};
}

export default useLogout;
