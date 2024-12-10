import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='bg-slate-950 text-white px-8 md:px-16 lg:px-24'>
      <div className='flex justify-between items-center h-20'>
        <div className='text-lg font-semibold'>AKRS</div>
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes className='ml-64 mb-2' size={20} /> : <FaBars size={20} />}
          </button>
        </div>
        <div className={`flex-col md:flex md:flex-row md:space-x-6 text-sm ${isMenuOpen ? 'flex' : 'hidden'} md:flex mt-10 md:mt-0`}>
          <a href="#about" className="hover:font-bold">About Me</a>
          <a href="#experience" className="hover:font-bold">Experience</a>
          <a href="#projects" className="hover:font-bold">Projects</a>
          <a href="#contact" className="hover:font-bold">Contact</a>
        </div>
      </div>
    </nav>
  );
  
}

export default Navigation;