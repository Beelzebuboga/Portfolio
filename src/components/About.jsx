import { useState } from 'react'
const About = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        };
  return (
    <div className='w-full'>
        <div className="flex flex-row gap-4 justify-center h-72 md:pt-8 pt-14 text-white bg-slate-950" value={value} onChange={handleChange}>
            <button className='text-white text-sm ring-2 ring-gray-800 bg-gray-800 rounded-md px-10 md:px-24 hover:ring-gray-50 h-8'>About me</button>
            <button className='text-white text-sm ring-2 ring-gray-800 bg-gray-800 rounded-md px-10 md:px-24 hover:ring-gray-50 h-8'>Experience</button>
            <button className='text-white text-sm ring-2 ring-gray-800 bg-gray-800 rounded-md px-10 md:px-24 hover:ring-gray-50 h-8'>Projects</button>

            
        </div>
    </div>
    
  )
}

export default About