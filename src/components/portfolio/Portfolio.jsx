import testone from "../../assets/portfolio/poert1.png"
import testtwo from "../../assets/portfolio/port2.png"
import testthree from "../../assets/portfolio/port3.png"
export default function Portfolio() {
  return (
    <div className="bg-white w-dvw h-dvh flex justify-center items-center">
      <div className="container flex justify-center items-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 "> 
          <div className="">
      <img src={testone} alt=""className="w-full" />
      </div>
      <div className="">
      <img src={testtwo} alt="" className="w-full"/>
      </div>
      <div className="">
      <img src={testthree} alt="" className="w-full"/>
      </div>
      <div className="">
      <img src={testone} alt=""className="w-full" />
      </div>
      <div className="">
      <img src={testtwo} alt=""className="w-full" />
      </div>
      <div className="">
      <img src={testthree} alt=""className="w-full" />
      </div>
      </div>
      </div></div>
     
  )
}
