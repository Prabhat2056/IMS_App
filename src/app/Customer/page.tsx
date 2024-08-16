"use client"
import axios from 'axios';
import { Pencil, Router, Table, Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation';

import React, { useState } from 'react'

const page = () => {

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImZpcnN0X25hbWUiOiJwcmFiaW4iLCJtaWRkbGVfbmFtZSI6IiIsImxhc3RfbmFtZSI6ImJoYXR0YXJhaSIsImVtYWlsIjoicHJhYmluMTIzM0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRnSUNYeUVxUGV3azNyQng1eFV5YkMuQ1NnS2M0NE5WZjBEMXBYRzVHelY0N0xRdkpmR3RaMiIsInJvbGVfaWQiOjIsImNyZWF0ZWRfYXQiOiIyMDI0LTA3LTMxVDA2OjMxOjUxLjY0MloiLCJ1cGRhdGVkX2F0IjoiMjAyNC0wNy0zMVQwNjozMTo1MS42NDJaIiwiaWF0IjoxNzIyNDA3NTY3fQ.lW3BdpJgQYxj9GvCh095UMMtk6t-eR6uQ6-C_2in58s";
  const [table, setTable] = useState([]);
  const postTable = async () => {
    try {
      const response = await axios.get("http://localhost:8000/customer", {
        headers: {
          "Content-Type": "Application.json",
          "Authorization": `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const router = useRouter();
  return (
   <><div className='flex flex-wrap  w-full gap-96'>
      <p className='font-bold'>
        Customer/ Vendor
      </p>
      <button className='border rounded-lg justify-center bg-green-400 w-24 ml-52 '
      onClick={(e)=>{
        e.preventDefault();
        router.push("/Customer/add")
      }}
      >+ Add</button>
    </div>
    <div className="overflow-x-auto mt-9">
        <table className='w-[100%] text-sm text-left rtl:text-right rounded-xl border-b-slate-700 border-2px'>
          <thead className='text-xs w-24 text-gray-700 ml-3'>
          <tr className="">
            
            <th className='pr-4'>Name</th>
            <th className='pr-4'>Email</th>
            <th className='pr-4'>Phone Number</th>
            <th className='pr-4'>Street Address</th>
            <th className='pr-4'>City</th>
            <th className='pr-4'>Province</th>
            <th className='pr-4'>Zip_Code</th>
            <th className='pr-4'>IsVendor</th>
            <th className="w-16">Action</th>
          </tr>
          </thead>
          <tbody>
            <tr className='font-light '>
            
              <td className='pr-4'>Prabhat Bhattarai</td>
              <td className='pr-4'>prabhat@gmail.com</td>
              <td className='pr-4'>9812553699</td>
              <td className='pr-4'>Pokhariya</td>
              <td className='pr-4'>Biratnagar</td>
              <td className='pr-4'>Koshi</td>
              <td className='pr-4'>23455</td>
              <td className='pr-4'>Yes</td>
              <td className='flex flex-row flex-nowrap gap-2'>
                <button className=' h-7 w-6 text-black'><Pencil /></button>
                <button className=' h-7 w-6 text-black'><Trash2 /></button>
              </td>
            </tr>
          </tbody>
              
        </table>
    </div>
    </>
          )
          
        }
          export default page