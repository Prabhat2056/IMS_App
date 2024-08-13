



"use client"
import { useState } from "react"
import Image from 'next/image';
import { BadgeDollarSign, LayoutDashboard, LayoutList, Settings, User} from "lucide-react";
import Link from "next/link";


export default function Sidebar() {
    const [isDropDown, setIsDropDown]= useState(false);

    const dropdown= ()=>{
        setIsDropDown(!isDropDown);
    }
    return (
        <aside className="min-h-screen w-64 my-16  py-2 mx-2 my- bg-white text-black border-r border-black fixed">
            
        
           <ul>
           <div className="flex items-center px-2 space-x-2 border-white rounded-2xl hover:bg-slate-400 cursor-pointer">
           <LayoutDashboard />
             <Link href="DashBoard"className="px-4 py-2  "> Dashboard</Link>
           </div>

           <div className="flex items-center px-2 space-x-2 border-white rounded-xl hover:bg-slate-400 cursor-pointer">
           <BadgeDollarSign />
             <Link href="Sales" className="px-4 py-2 ">Sales</Link>
             
           </div>
           
           <div className="flex items-center px-2 space-x-2 border-white rounded-xl hover:bg-slate-400 cursor-pointer">
           <LayoutList />
             <Link href="/Items" className="px-4 py-2">Items</Link>
           </div>

           <div className="flex items-center px-2 space-x-2 border-white rounded-xl hover:bg-slate-400 cursor-pointer">
           
           <User color="black"/>
             <Link href="Customer"className="px-4 py-2  "> Customer</Link>
           </div>
            
           <div className="flex items px-2 space-x-2 border-white rounded-xl hover:bg-slate-400 cursor-pointer">
            {/* <Image src="" alt="Icon" height={20} width={20}  /> */}
            <Settings className="mt-1"/>
             <li className="px-4 py-2  " onClick={dropdown}> Settings{isDropDown &&(
               <ul>
                 <li className="px-4 py-2  border-white rounded-xl  hover:scale-125 cursor-pointer">Profile</li>
                 <li className="px-4 py-2  border-white rounded-xl  hover:scale-125 cursor-pointer">Roles</li>
                <li className="px-4 py-2  border-white rounded-xl  hover:scale-125 cursor-pointer">Users</li>
              </ul>)}
             </li>
           </div>

          </ul>


        </aside>
        
    )
}
