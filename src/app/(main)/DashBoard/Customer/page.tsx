"use client"
import axios from 'axios';
import { Pencil, Router, Table, Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

interface Customer{
  name: string;
  email: string;
  phoneNumber: number;
  street_address: string;
  city: string;
  province: string;
  is_vendor: boolean;
  Zip_Code:string;
  action:string;

}

const page = () => {

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImZpcnN0X25hbWUiOiJwcmFiaW4iLCJtaWRkbGVfbmFtZSI6IiIsImxhc3RfbmFtZSI6ImJoYXR0YXJhaSIsImVtYWlsIjoicHJhYmluMTIzM0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRnSUNYeUVxUGV3azNyQng1eFV5YkMuQ1NnS2M0NE5WZjBEMXBYRzVHelY0N0xRdkpmR3RaMiIsInJvbGVfaWQiOjIsImNyZWF0ZWRfYXQiOiIyMDI0LTA3LTMxVDA2OjMxOjUxLjY0MloiLCJ1cGRhdGVkX2F0IjoiMjAyNC0wNy0zMVQwNjozMTo1MS42NDJaIiwiaWF0IjoxNzIyNDA3NTY3fQ.lW3BdpJgQYxj9GvCh095UMMtk6t-eR6uQ6-C_2in58s";


  const [customerData, setCustomerData] = useState<Customer[]>([]);
  const router = useRouter();

  const tableHeader=[
    "Name",
    "Email",
    "Phone Number",
    "Address",
    "Zip_Code",
    "IsVendor",
    "Action",
  ]
  
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

  const getTable = async () => {
    try {
      const response = await axios.get("http://localhost:8000/customers", {
        headers: {
          "Content-Type": "Application.json",
          Authorization: `Bearer ${token}`,
        },
      });
      let data =response.data;
      setCustomerData(data)
      console.log(data)

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTable()
  }, [])
  

  return (
   <><div className='flex flex-wrap  ml-50 mt-15 w-full gap-96'>
      <p className='font-bold'>
        Customer/ Vendor
      </p>
      <button className='border rounded-lg justify-center bg-green-400 w-24 ml-52 '
      onClick={(e)=>{
        e.preventDefault();
        router.push("/DashBoard/Customer/add")
      }}
      >+ Add</button>
    </div>
    <div className="overflow-x-auto mt-9">
        <table className='w-[100%] text-sm text-left rtl:text-right rounded-xl border-b-slate-700 border-2px'>
          {tableHeader.map((value:any, index:number)=>{
          return <th key={index}>{value}</th>
            }
          )}
          
          <tbody>
            {
              customerData.map((value,index)=>(
                <tr key={index}>
                <td className='pr-4'>{value.name}</td>
                <td className='pr-4'>{value.email}</td>
                <td className='pr-4'>{value.phoneNumber}</td>
                <td className='pr-4'>{`${value.street_address}, ${value.city},${value.province}`}</td>
                <td className='pr-4'>{value.Zip_Code}</td>
                <td className='pr-4'>{value.is_vendor}</td>
                <td className='pr-4'>{value.action}</td>
              </tr>
              )

              )
            }


            {/* <tr className='font-light '>
            
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
            </tr> */}
          </tbody>
              
        </table>
    </div>
    </>
          )
          
        }
          export default page