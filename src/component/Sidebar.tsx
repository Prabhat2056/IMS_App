
"use client"
import { useState } from "react"
import Image from 'next/image';
import { BadgeDollarSign, LayoutDashboard, LayoutList, LogOut, Settings, User} from "lucide-react";
import Link from "next/link";
import Cookies  from "js-cookie";
import { useRouter } from "next/navigation";


export default function Sidebar() {
    const [isDropDown, setIsDropDown]= useState(false);
    const router=useRouter()
    const logOut=()=>{
      Cookies.remove("token");
      router.push("/")
    }

    const dropdown= ()=>{
        setIsDropDown(!isDropDown);
    }
    return (
        <aside className="min-h-screen w-52 my-16  py-2 mx-2 my- bg-white text-black border-r border-black fixed flex flex-col justify-between">
            
        
           <ul>
           <div className="flex items-center px-2 space-x-2 border-white rounded-2xl hover:bg-slate-400 cursor-pointer">
           <LayoutDashboard />
             <Link href="/DashBoard"className="px-4 py-2  "> Dashboard</Link>
           </div>

           <div className="flex items-center px-2 space-x-2 border-white rounded-xl hover:bg-slate-400 cursor-pointer">
           <BadgeDollarSign />
             <Link href="/DashBoard/sales" className="px-4 py-2 ">Sales</Link>
             
           </div>
           
           <div className="flex items-center px-2 space-x-2 border-white rounded-xl hover:bg-slate-400 cursor-pointer">
           <LayoutList />
             <Link href="/DashBoard/Items" className="px-4 py-2">Items</Link>
           </div>

           <div className="flex items-center px-2 space-x-2 border-white rounded-xl hover:bg-slate-400 cursor-pointer">
           
           <User color="black"/>
             <Link href="/DashBoard/Customer"className="px-4 py-2  "> Customer</Link>
           </div>
            
           <div className="flex items px-2 space-x-2 border-white rounded-xl hover:bg-slate-400 cursor-pointer">
            {/* <Image src="" alt="Icon" height={20} width={20}  /> */}
            <Settings className="mt-1"/>
             <li className="px-4 py-2  " onClick={dropdown}> Settings{isDropDown &&(
               <ul className="flex flex-col">
                <Link href='profile' className="px-4 py-2  border-white rounded-xl  hover:scale-125 cursor-pointer">Profile</Link>
                <Link href='role' className="px-4 py-2  border-white rounded-xl  hover:scale-125 cursor-pointer">Roles</Link>
                <Link href='user' className="px-4 py-2  border-white rounded-xl  hover:scale-125 cursor-pointer">Users</Link>               
              </ul>)
              }
             </li>
           </div>
          </ul>
          <button
           className="flex flex-row gap-2 mb-20"
           onClick={logOut}
           ><LogOut />Logout</button>

        </aside>
        
    )
}
