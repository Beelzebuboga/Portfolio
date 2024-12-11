import { useState } from 'react';

const ToggleComponent = () => {
    const [activeContent, setActiveContent] = useState(null);

    const handleButtonClick = (content) => {
        setActiveContent(content);
    };

    return (
        <div className='w-full'>
            <div className="button-group flex flex-row gap-4 justify-center pt-14 text-white bg-slate-950">
                <button  className={`text-sm ring-2 ring-gray-800 rounded-md px-10 md:px-20 lg:px-24 h-8 hover:ring-gray-50 ${activeContent === 'content1' ? 'bg-white text-gray-800 hover:ring-gray-800 font-bold' : 'bg-gray-800 text-white'}`} onClick={() => handleButtonClick('content1')}>About me</button>
                <button className={`text-sm ring-2 ring-gray-800 rounded-md px-10 md:px-20 lg:px-24 h-8 hover:ring-gray-50 ${activeContent === 'content2' ? 'bg-white text-gray-800 hover:ring-gray-800 font-bold' : 'bg-gray-800 text-white'}`}  onClick={() => handleButtonClick('content2')}>Experience</button>
                <button className={`text-sm ring-2 ring-gray-800 rounded-md px-10 md:px-20 lg:px-24 h-8 hover:ring-gray-50 ${activeContent === 'content3' ? 'bg-white text-gray-800 hover:ring-gray-800 font-bold' : 'bg-gray-800 text-white'}`}  onClick={() => handleButtonClick('content3')}>Projects</button>
            </div>
            <div id="content" className='bg-slate-950 text-white text-center p-20 text-20'>
                {activeContent === 'content1' && <div>
                                                <p> Hi, I am Abdul-khaliq Ranao Solaiman. I am a passionate Web Developer, Graphic Designer and Video Editor and have been working for over two years to create meaningful digital and visual content. I started it out of curiosity, but this has turned into a proper stream wherein I am constantly looking for creative and technical solutions for every challenge I’m faced with. <br/><br />

                                                One of my favorite quotes says, ‘You don’t have to be great to start, but you have to start to be great,’ and this drives me in the process of acquiring necessary skills. Thereby, every work I undertake becomes an avenue for growth and learning. <br/><br />

                                                My services include the design of websites that can work in mobile devices, websites that work on their specific needs; the design and development of creative graphics for engagement of audiences, and videos that will make an impression on the minds of the targeted consumers. Everything from building an interactive interface to developing a bold poster, to editing a cutting edge video, my goal is to visually express the desired message.<br /> <br/>
                                                I am not just a designer and developer; I am a chance taker who brings every idea into reality by making every pixel and every frame matter.<br/><br />
                                                I would love to work with you!
                                                </p>
                                                <br />
                                                </div>}
                {activeContent === 'content2' && <div>This is the second content.
                    
                    
                    
                                    
                                                </div>}
                {activeContent === 'content3' && <div>This is the third content.
                    
                    
                    
                    
                    
                    
                                                </div>}
            </div>
        </div>
    );
};

export default ToggleComponent;