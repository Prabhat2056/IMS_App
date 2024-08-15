"use client"
import React from 'react'


const CustomInput = (props:any) => {
  return (
    <div>
        <label>{props.label}</label>
        <br></br>
            <input className="border rounded-lg pl-3 bg-slate-100 " 
            type="text" 
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            />
            <br></br>
    </div>
  )
}

export default CustomInput

