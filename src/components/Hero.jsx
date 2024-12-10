import Photo from "../assets/Photos/photo.jpg"
import Web from "../assets/Photos/i-code.png"
import Video from "../assets/Photos/i-video.png"
import Graphic from "../assets/Photos/i-graphic.png"
const Hero = () => {

    //const title= ["Web Developer","Video Editor", "Graphic Designer"];

  return (
    <>
    <div className="md:h-72 h-96 bg-slate-950"> 
      <div className="flex flex-col md:flex-row md:justify-center md:gap-20 items-center">
        <div className="flex flex-col items-center md:items-center">
          <div className="card">
          <img src={Photo} alt="my Profile"/>
          </div>
            <h1 className="text-white mt-2 font-semibold">Abdul-khaliq R. Solaiman</h1>
            <p className="text-white italic">Design. Edit. Code.</p>
          </div>
        <div className="flex flex-col">
        <div className="flex flex-row justify-center space-x-16 md:space-x-20 mt-10 ">
          <div className="">
          <img src={Web} alt="" className="h-16 md:h-20 m-auto" />
          <h2 className="text-sm text-white font-semibold">Web Development</h2>
          </div>
          <div>
          <img src={Video} alt=""  className="h-16 md:h-20 m-auto"/>
          <h2 className="text-sm text-white font-semibold">Video Editing</h2>
          </div>
          <div>
          <img src={Graphic} alt=""  className="h-16 md:h-20 m-auto"/>
          <h2 className="text-sm text-white font-semibold">Graphic Design</h2>
          </div>
        </div>
        <div className="flex flex-row md:space-x-8 md:mt-12 gap-4 md:gap-0 mt-8">
        <button className='text-white text-sm ring-2 ring-gray-800 bg-gray-800 rounded-md px-8 md:px-12 hover:ring-gray-50 h-8'>View Resume</button>
            <button className='text-white text-sm ring-2 ring-gray-800 bg-gray-800 rounded-md md:px-12 px-12 hover:ring-gray-50 h-8'>Hire me</button>
            <button className='text-white text-sm ring-2 ring-gray-800 bg-gray-800 rounded-md md:px-10 px-10 hover:ring-gray-50 h-8'>Add me</button>
         
        </div>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Hero
