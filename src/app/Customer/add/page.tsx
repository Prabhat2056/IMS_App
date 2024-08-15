"use client"
import CustomInput from '@/app/component/CustomInput'
import React, { useState } from 'react'

const add = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phonenumber, setPhoneNumber] = useState("")
  const [streetAddress, setStreetAdress] = useState("")
  const [city, setCity] = useState("")
  const [province, setProvince] = useState("")
  const [zipCode, setZipCode] = useState("")
  

  return (
    <div className='flex flex-col justify-center items-center bg-zinc-100 w-4/5 fixed border'>
        <form className='flex flex-col gap-3 w-1/3 my-5 p-5 rounded-xl bg-white border'>
             
             <CustomInput label= "Name" placeholder="Enter Name" value={name}
             onChange= {(e:any)=>setName(e.target.value)}
             />

            <CustomInput label= "Email" placeholder="Enter Email" value={email}
             onChange= {(e:any)=>setEmail(e.target.value)}
             />

            <CustomInput label= "Phone Number" placeholder="Enter Phone Number" value={phonenumber}
             onChange= {(e:any)=>setPhoneNumber(e.target.value)}
             />

            <CustomInput label= "Street Address" placeholder="Enter Street Address" value={streetAddress}
             onChange= {(e:any)=>setName(e.target.value)}
             />

            <CustomInput label= "City" placeholder="Enter City" value={city}
             onChange= {(e:any)=>setName(e.target.value)}
             />

            <CustomInput label= "Province" placeholder="Enter Province Name" value={province}
             onChange= {(e:any)=>setName(e.target.value)}
             />

            <CustomInput label= "Zip Code" placeholder="Enter Zipcode" value={zipCode}
             onChange= {(e:any)=>setName(e.target.value)}
             />

            

            <label>
            <input className="mr-3"type="checkbox" id="vendor1" name="vendor1" value="vendor"/>
            IsVendor</label>
            <br></br>

            <button className="border rounded-sm w-20 ml-32 bg-blue-400">Submit</button>
            
            
        </form>
    </div>
  )
}

export default add