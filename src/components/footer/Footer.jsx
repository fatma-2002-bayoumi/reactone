

export default function Footer() {
  return (
    <footer className=" "> 
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  text-center bg-[#2C3E50] py-20">

      <div className="text-center text-white ">
        <h1 className="font-bold ">LOCATION</h1><p>2215 John Daniel Drive</p> <p>Clark, MO 65243</p>
        </div>
      <div className="text-center text-white  font-bold "><h1>AROUND THE WEB</h1>
      <div  className="icons">
        <i className="fa-brands fa-facebook mx-1 icon"></i>
      <i  className="fa-brands fa-twitter mx-1 icon"></i>
      <i  className="fa-brands fa-linkedin-in mx-1 icon"></i>
      <i  className="fa-solid fa-globe mx-1 icon"></i></div>
      </div>
      <div className="text-center text-white "><h1 className="font-bold ">ABOUT FREELANCER</h1>
      <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
      </div>
      </div>
      <div className="text-white bg-[#11181E] text-center py-5"><p>Copyright © Your Website 2021</p></div>
    </footer>
   
  )
}
