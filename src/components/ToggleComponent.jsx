import { useState } from 'react';
import About from './About';
import Experience from './Experience';

const ToggleComponent = () => {
    const [activeContent, setActiveContent] = useState(null);

    const handleButtonClick = (content) => {
        setActiveContent(content);
    };

    return (
        <div className='w-full'>
            <div className="button-group flex flex-row gap-4 justify-center pt-10 text-white bg-slate-950">
                <button  className={`text-sm ring-2 ring-gray-800 rounded-md px-10 md:px-20 lg:px-24 h-8 hover:ring-gray-50 ${activeContent === 'content1' ? 'bg-white text-gray-800 hover:ring-gray-800 font-bold' : 'bg-gray-800 text-white'}`} onClick={() => handleButtonClick('content1')}>About me</button>
                <button className={`text-sm ring-2 ring-gray-800 rounded-md px-10 md:px-20 lg:px-24 h-8 hover:ring-gray-50 ${activeContent === 'content2' ? 'bg-white text-gray-800 hover:ring-gray-800 font-bold' : 'bg-gray-800 text-white'}`}  onClick={() => handleButtonClick('content2')}>Experience</button>
                <button className={`text-sm ring-2 ring-gray-800 rounded-md px-10 md:px-20 lg:px-24 h-8 hover:ring-gray-50 ${activeContent === 'content3' ? 'bg-white text-gray-800 hover:ring-gray-800 font-bold' : 'bg-gray-800 text-white'}`}  onClick={() => handleButtonClick('content3')}>Projects</button>
            </div>
            <div id="content">
                {activeContent === 'content1' && <About />}
                {activeContent === 'content2' && <Experience />}
                {activeContent === 'content3' && <div>This is the third content.
                    
                    
                    
                    
                    
                    
                                                </div>}
            </div>
        </div>
    );
};

export default ToggleComponent;