"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import { ChevronDownIcon, Search } from 'lucide-react';
import CustomInput from './CustomInput';

const Header = () => {
  const [search, setSearch] = useState("")

  return (
    <div className="mb-16 flex items-center space-x-4 h-16 bg-yellow-500 fixed w-full text-blue-600">
      <div className="flex justify-start items-start w-64 space-x-4">
        <Image src="/images/icon.png" alt="logo" height={40} width={40} className='ml-6 border rounded-xl' />
        <h1 className="text-blue-600 text-2xl font-extrabold mt-1.5">IMS APP</h1>
      </div>
      <div className='flex justify-between items-start flex-row w-full'>
        <div className="flex space-x-2 ml-5 mb-4">
          <CustomInput placeholder="Search" value={search}
             onChange= {(e:any)=>setSearch(e.target.value)}
             />
        </div>
        <div className="flex space-x-2 mr-5 mt-5 cursor-pointer">
          <span>Prabhat Bhattarai</span>
          <ChevronDownIcon />
        </div>
      </div>
    </div>
  )
}

export default Header