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
        
      }
    }
  return (
    <div className="flex flex-col justify-center items-center bg-zinc-100">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-1/3 my-5 p-2 rounded-xl bg-white border">
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
            className="mr-3"
            type="checkbox"
            id="vendor1"
            name="vendor1"
            value="vendor"
          />
          Remember Me
        </label>

        <button
          type='submit'
          className="border rounded-sm w-20 ml-32 bg-blue-400"
        >
          Login
        </button>
        
  </form>
  </div>
  )
}


export default login