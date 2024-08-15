import { Pencil, Table, Trash2 } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
   <><div className='flex flex-wrap  w-full gap-96'>
      <p className='font-bold'>
        Customer/ Vendor
      </p>
      <button className='border rounded-lg justify-center bg-green-400 w-24 ml-52'>+ Add</button>
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