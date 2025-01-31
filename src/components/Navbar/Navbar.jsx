import { NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <>
    <div className="bg-[#2C3E50] py-5  fixed top-0 left-0 right-0"> 
         <div className="container  mx-auto flex justify-between py-5 ">
    <h1 className="font-bold text-white text-2xl uppercase"><NavLink to={"home"} className="font-bold text-white text-xl uppercase">start framework</NavLink></h1>
    <ul className="flex  row gap-x-3">
      <li><NavLink to={"about"} className="font-bold text-white text-xl uppercase">about</NavLink></li>

      <li><NavLink  to={"portfolio"} className="font-bold text-white text-xl uppercase">portifolio</NavLink></li>
      <li><NavLink  to={"contact"}className="font-bold text-white text-xl uppercase">contact</NavLink></li>
    </ul>
  </div></div></>

  )
}
