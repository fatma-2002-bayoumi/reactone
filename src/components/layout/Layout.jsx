import { Outlet } from "react-router-dom"

import Navbar from "../Navbar/Navbar"
import Footer from "../footer/Footer"

export default function Layout() {
  return (
    <>
    
   <Navbar/>
   <div className="bg-teal-500 min-h-dvh min-w-full flex items-center justify-center"><Outlet/>

    </div>
   
   <Footer/>
    </>
  )
}
