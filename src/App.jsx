import {  createHashRouter, RouterProvider } from "react-router-dom"
import"../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import './App.css'
import Home from "./components/home/Home"
import Contact from "./components/contact/Contact"
import About from "./components/about/About"
import Layout from "./components/layout/Layout"
import Portfolio from "./components/portfolio/Portfolio"
import Notfound from "./components/Notfount/Notfound"
Notfound


function App() {
const routes = createHashRouter([
  {path:"",element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:"home",element:<Home/>},
    {path:"about",element:<About/>},
    {path:"contact",element:<Contact/>},
    {path:"portfolio",element:<Portfolio/>},
    {path:"*",element:<Notfound/>},
    
  ]}
])



  return (
   <>
   <RouterProvider router ={routes}></RouterProvider>
   

   </>
  )
}

export default App
