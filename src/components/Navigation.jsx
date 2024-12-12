// import { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa'; 



// const Navigation = () => {
  
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//       setIsMenuOpen(!isMenuOpen);
//   };


//   return (
    
//     <nav className='bg-slate-950 text-white px-8 md:px-16 lg:px-24'>
//        {/*Navigation bar*/}
//       <div className='flex justify-between items-center h-20'>
//         <div className='text-lg font-semibold'>AKRS</div>
//           <div className='md:flex md:ml-56'>
//             <button onClick={toggleMenu}>
//                {isMenuOpen ? <FaTimes className='ml-64 md:m-mb-2' size={20} /> : <FaBars size={20} className='' />}
//             </button>
//           </div>

//        {/*Navigation bar links*/}
//         <div className={`flex-col md:space-x-6 text-sm ${isMenuOpen ? 'flex' : 'hidden'} mt-10 md:mt-10`}>
//             <a href="#about" className="md:ml-6 hover:font-bold">About Me</a>
//             <a href="#experience" className="hover:font-bold">Experience</a>
//             <a href="#projects" className="hover:font-bold">Projects</a>
//             <a href="#contact" className="hover:font-bold">Contact</a>
//         </div>
//       </div>
//     </nav>
//   );
  
// }

// export default Navigation;