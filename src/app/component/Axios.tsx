import axios from 'axios'
import React, { useState } from 'react'


const Axios = () => {
    const token= ""
    const [table, setTable] = useState([])
        try {
            const postTable = async ()=>{
                const response = await axios.post("http://localhost:8000/customer",{
                  headers:{
                    "Content-Type":"Application.json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    "name": "",
                    "email":"",
                    "phone": "",
                    "street_address":"a",
                    "city":"",
                    "province":"kosi",
                    "zip_code":"",
                    "is_vendor":""
                }),  
                })
              }
        } catch (error) {
            console.error(error)
        }
        }
  return (
    <div></div>
  )
}

export default Axios