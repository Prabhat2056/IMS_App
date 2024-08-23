"use client"
import React, { useState } from 'react'
import CustomInput from '../../component/CustomInput'
import Cookies from "js-cookie";
import axios from 'axios';
import { useRouter } from 'next/navigation';

const login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter();

    const handleSubmit = async (e: any) =>{
      e.preventDefault()
      // Cookies.set("token","abc")
      try {
        const response = await axios.post('http://localhost:8000/auth/login',
          {
              email:email,
              password: password
        },
        {
          headers:{
            "Content-Type": "Application/json"
          }
        })
        const token= response.data.token;
        Cookies.set("token",token);
        router.push("/DashBoard")
        
      } catch (error) {
        console.error(error)
        // alert(e)
        
      }
    }

   
  return (
  
      <form onSubmit={handleSubmit} className=" flex flex-col size-full h-[300px] w-[400px] rounded-2xl border-double border-4 items-center gap-4 p-10">
        <CustomInput 
       
          label="Email"
          placeholder="Enter Email"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />

        <CustomInput
          label="Password"
          placeholder="Enter Password"
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
        />

        <label>
          <input
            className="mr-3 mt-3"
            type="checkbox"
            id="vendor1"
            name="vendor1"
            value="vendor"
          />
          Remember Me
        </label>

        <button
          type='submit'
          className=" rounded w-28 h-10 mt-5 bg-blue-400 "
        >
          Login
        </button>
        
  </form>

  )
}


export default login