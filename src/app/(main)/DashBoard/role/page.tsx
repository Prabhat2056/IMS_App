"use client"
import router from 'next/router';
import React, { useState } from 'react'
import CustomInput from '../../../../component/CustomInput';

const Role = () => {
  const [role, setRole] = useState("")
  return (
    <>
    <div className=' w-full'>
      <p className='font-bold'>
        Roles
      </p>
    
      <div className='flex justify-between w-96 items-center  mb-4 -mt-4'>
      <CustomInput 
          placeholder="Enter Role Name"
          value={role}
          onChange={(e: any) => setRole(e.target.value)}
        />
      <button className='border rounded-lg justify-center  bg-green-400 w-24 h-7 mt-6'
      onClick={(e)=>{
        e.preventDefault();
        router.push("/Customer/add")
      }}
      > + Create</button>
      </div>

      <div className="overflow-x-auto mt-9">
        <table className='w-[100%] text-sm text-left rtl:text-right rounded-xl border-b-slate-700 border-2px'>
          <thead className='text-xs w-24 text-gray-700 ml-3'>
          <tr className="">
            <th className='pr-4'>Role ID</th>
            <th className='pr-4'>Role Name</th>
            <th className='pr-4'>Action Item</th>
          </tr>

          </thead>
          </table>
          </div>
    </div>
    </>
  )
}

export default Role