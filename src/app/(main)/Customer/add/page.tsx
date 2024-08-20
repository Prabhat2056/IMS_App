"use client";
import CustomInput from "@/app/component/CustomInput";
import axios from "axios";
import React, { useEffect, useState } from "react";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImZpcnN0X25hbWUiOiJwcmFiaW4iLCJtaWRkbGVfbmFtZSI6IiIsImxhc3RfbmFtZSI6ImJoYXR0YXJhaSIsImVtYWlsIjoicHJhYmluMTIzM0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRnSUNYeUVxUGV3azNyQng1eFV5YkMuQ1NnS2M0NE5WZjBEMXBYRzVHelY0N0xRdkpmR3RaMiIsInJvbGVfaWQiOjIsImNyZWF0ZWRfYXQiOiIyMDI0LTA3LTMxVDA2OjMxOjUxLjY0MloiLCJ1cGRhdGVkX2F0IjoiMjAyNC0wNy0zMVQwNjozMTo1MS42NDJaIiwiaWF0IjoxNzIyNDA3NTY3fQ.lW3BdpJgQYxj9GvCh095UMMtk6t-eR6uQ6-C_2in58s";

const postTable = async () => {
  try {
    const response = await axios("http://localhost:8000/customer", {
      headers: {
        "Content-Type": "Application.json",
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
      data: {
        name: "",
        email: "",
        phone: "",
        street_address: "",
        city: "",
        province: "",
        zip_code: "",
        is_vendor: "",
      },
    });
  } catch (error) {
    console.error(error);
  }
};

const getTable = async () => {
  try {
    const response = await axios.get("http://localhost:8000/customer", {
      headers: {
        "Content-Type": "Application.json",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

const addOrUpdate = async (id?: string) => {
  // e.preventDefault();
  let url = "http://localhost:8000/customer"
  if (id) {
    url = `${url}/${id}`
  }

  try {
    const response = await axios(url, {
      headers: {
        "Content-Type": "Application.json",
        Authorization: `Bearer ${token}`,
      },
      method: id ? "PATCH" : "POST",
      data: {
        name: "",
        email: "",
        phone: "",
        street_address: "",
        city: "",
        province: "",
        zip_code: "",
        is_vendor: "",
      },
    });
  } catch (error) {
    console.error(error);
  }
};

// const updateCustomer = async () => {
//   try {
//     const customerData = {
//       first_name: "Saroj",
//       last_name: "Gelal",
//       email: "saroj@gmail.com",
//     };

//     const response = await axios({
//       url: "http://localhost:8000/customer",
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       data: customerData,
//     });
//     console.log("Customer updated successfully", response.data);
//     postTable();
//   } catch (error) {
//     console.error("Error updating customer", error);
//   }
// };

const deleteCustomer = async () => {
  try {
    const response = await axios({
      url: "http://localhost:8000/customer",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Customer deleted successfully", response.data);
    postTable();
  } catch (error) {
    console.error("Error deleting customer", error);
  }
};

const add = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [streetAddress, setStreetAdress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [isVendor, setIsVendor] = useState(Boolean)





  useEffect(() => {
  getTable();
  }, [])

  useEffect(() => {
   deleteCustomer();
  }, [])
  
  

  return (
    <div className="flex flex-col justify-center items-center bg-zinc-100 w-4/5 fixed border">
      <form className="flex flex-col gap-3 w-1/3 my-5 p-5 rounded-xl bg-white border">
        <CustomInput
          label="Name"
          placeholder="Enter Name"
          value={name}
          onChange={(e: any) => setName(e.target.value)}
        />

        <CustomInput
          label="Email"
          placeholder="Enter Email"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />

        <CustomInput
          label="Phone Number"
          placeholder="Enter Phone Number"
          value={phonenumber}
          onChange={(e: any) => setPhoneNumber(e.target.value)}
        />

        <CustomInput
          label="Street Address"
          placeholder="Enter Street Address"
          value={streetAddress}
          onChange={(e: any) => setStreetAdress(e.target.value)}
        />

        <CustomInput
          label="City"
          placeholder="Enter City"
          value={city}
          onChange={(e: any) => setCity(e.target.value)}
        />

        <CustomInput
          label="Province"
          placeholder="Enter Province Name"
          value={province}
          onChange={(e: any) => setProvince(e.target.value)}
        />

        <CustomInput
          label="Zip Code"
          placeholder="Enter Zipcode"
          value={zipCode}
          onChange={(e: any) => setZipCode(e.target.value)}
        />

        <label>
          <input
            className="mr-3"
            type="checkbox"
            id="vendor1"
            name="vendor1"
            checked={isVendor}
            onChange={(e)=>{setIsVendor(e.target.checked)}}
          />
          IsVendor
        </label>
        <br></br>

        <button
          onClick={(e) => {
            e.preventDefault();
            addOrUpdate()//  (id)
          }}
          className="border rounded-sm w-20 ml-32 bg-blue-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default add;
