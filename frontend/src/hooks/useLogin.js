import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

export default function useLogin() {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();



const login =  async (username , password) => {
     const success = handleValidationError(username, password);
     if(!success)return ;
  
    setLoading(true);
    try {
        const res = await fetch('/api/auth/login',{
            method: 'POST',
            headers :{'content-type': 'application/json'},
            body: JSON.stringify({username, password})
        })
 

        
          const data = await res.json();
          if(data.error){
            throw new Error(data.error);
          }
          setLoading(false);
          toast.success("Logged in successfully");
          localStorage.setItem('user-chat',JSON.stringify(data));
          //set the authenticated user
          setAuthUser(data);
    } catch (error) {
        toast.error(error.message);
    }finally{
        setLoading(false);
    }
}
return {loading , login}
}

const handleValidationError= (username , password) =>{
    if(!username || !password){
        toast.error('Please fill your username and password to chatty');
        return false;
        }

        return true ;
} 


