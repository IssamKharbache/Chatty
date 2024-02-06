import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { IoMdToday } from 'react-icons/io';
import { useAuthContext } from '../context/AuthContext';

export default function useSignUp() {
 const [loading , setLoading] = useState(false);
 const {authUser, setAuthUser} = useAuthContext();
 const signUp = async ({fullName ,username ,password ,confirmPassword ,gender}) =>{
       const success = handleInputValidations({fullName ,username ,password ,confirmPassword ,gender})
       if(!success) return ;
       setLoading(true);
       try {
        const res = await fetch('/api/auth/signup',{
            method: 'POST',
            headers:{'content-type': 'application/json'},
            body : JSON.stringify({fullName ,username ,password ,confirmPassword ,gender})
        })
     
        const data = await res.json();
       
        
        if(data.error){
          throw new Error(data.error);
        }
        
         setLoading(false);
        toast.success("User created successfully");
        localStorage.setItem('user-chat',JSON.stringify(data));
        //set the authenticated user
        setAuthUser(data);

       } catch (error) {
        toast.error(error.message)
       }
       finally{
       setLoading(false);
       }
 }
 return {loading , signUp}
 }


 const handleInputValidations = ({fullName ,username ,password ,confirmPassword ,gender}) =>{
    if(!fullName || !username || !password || !confirmPassword || !gender){
        toast.error("All fields are required");
        return false ;
    }

    if(password !== confirmPassword){
        toast.error("The passwords does not match")
        return false;
    }

    if(password.length < 8 ){
        toast.error("The password must be at least 8 characters");
        return false;
    }
 return true ;
 }
