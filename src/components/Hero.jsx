import { useState } from "react";
import Photo from "../assets/Photos/photo.jpg";
import Web from "../assets/Photos/i-code.png";
import Video from "../assets/Photos/i-video.png";
import Graphic from "../assets/Photos/i-graphic.png";
import Resume from "../assets/Files/Resume.pdf";

const Hero = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="bg-slate-950">
        <div className="flex flex-col md:flex-row md:justify-center md:gap-20 items-center">
          <div className="flex flex-col items-center md:items-center">
            <div className="card">
              <img src={Photo} alt="my Profile" />
            </div>
            <h1 className="text-white mt-2 font-semibold">Abdul-khaliq R. Solaiman</h1>
            <p className="text-white italic">Design. Edit. Code.</p>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row justify-center space-x-16 md:space-x-20 mt-10">
              <div>
                <img src={Web} alt="" className="h-16 md:h-20 m-auto" />
                <h2 className="text-sm text-white font-semibold">Web Development</h2>
              </div>

              <div>
                <img src={Video} alt="" className="h-16 md:h-20 m-auto" />
                <h2 className="text-sm text-white font-semibold">Video Editing</h2>
              </div>

              <div>
                <img src={Graphic} alt="" className="h-16 md:h-20 m-auto" />
                <h2 className="text-sm text-white font-semibold">Graphic Design</h2>
              </div>
            </div>

            <div className="flex flex-row md:space-x-8 md:mt-12 gap-4 md:gap-0 mt-8">
              <a href={Resume} download>
                <button className="text-white text-sm ring-2 ring-gray-800 bg-gray-800 rounded-md px-8 md:px-10 lg:px-10 hover:ring-gray-50 h-8">
                  View Resume
                </button>
              </a>

              <a
                href="https://www.linkedin.com/in/abdul-khaliq-solaiman-68607233a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-white text-sm ring-2 ring-gray-800 bg-gray-800 rounded-md md:px-10 lg:px-14 px-12 hover:ring-gray-50 h-8">
                  Hire me
                </button>
              </a>

              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="text-white text-sm ring-2 ring-gray-800 bg-gray-800 md:px-8 px-8 hover:ring-gray-50 h-8 rounded-md"
                >
                  Contact me
                </button>
    
              {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 bg-white shadow-lg w-32 hover:border-2">
                    <a
                      href="mailto:solaiman.business16@gmail.com"
                      className="block text-center text-sm text-white px-1 py-2 bg-gray-800 hover:font-bold hover:text-gray-800 hover:bg-white"
                    >
                      Email
                    </a>
                    <a
                      href="https://www.linkedin.com/in/abdul-khaliq-solaiman-68607233a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center text-sm text-white px-1 py-2 bg-gray-800 hover:font-bold hover:text-gray-800 hover:bg-white"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://www.facebook.com/kenshinhimuura/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center text-sm text-white px-1 py-2 bg-gray-800 hover:font-bold hover:text-gray-800 hover:bg-white"
                    >
                      Facebook
                    </a>
                    <a
                      href="https://github.com/Beelzebuboga"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center text-sm text-white px-1 py-2 bg-gray-800 hover:font-bold hover:text-gray-800 hover:bg-white"
                    >
                      Github
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
