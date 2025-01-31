 

export default function Contact() {
  return (
  <>
   <div className="min-w-full min-h-dvh bg-white">
    <h1 className="text-[#2C3E50] text-center uppercase fa-xl font-bold my-10">contact component</h1>
    <form className="flex flex-col justify-center items-center gap-y-5 py-11 w-1/2 mx-auto">
      <input className="w-full h-10 rounded " placeholder="name">
      </input>
      <input className="w-full h-10 rounded" placeholder="password">
      </input>
      <input className="w-full h-10 rounded"placeholder="email">
      </input>
      <input className="w-full h-10 rounded" placeholder="user age">
      </input>
     <div className="w-full "><button className="bg-[#1ABC9C] py-1 w-1/4  rounded text-white border-0">send</button></div> 
    </form>
   </div>
   </>
  

  )
}
