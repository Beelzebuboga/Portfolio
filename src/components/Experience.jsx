import htmlImage from '../assets/Photos/html.png';
import cssImage from '../assets/Photos/css.png';
import javascriptImage from '../assets/Photos/javascript.png';
import cppImage from '../assets/Photos/cpp.png';
import pythonImage from '../assets/Photos/python.png'
import phpImage from '../assets/Photos/php.png'
import reactImage from '../assets/Photos/react.png';
import bootstrapImage from '../assets/Photos/bootstrap.png';
import tailwindImage from '../assets/Photos/tailwindcss.png';
import sqlImage from '../assets/Photos/mysql.png';
import mongodbImage from '../assets/Photos/mongodb.png'
import canvaImage from '../assets/Photos/canva.png';
import capcutImage from '../assets/Photos/capcut.png';
import premiereImage from '../assets/Photos/premiere pro.png';
import illusImage from '../assets/Photos/illustrator.png';
import photoshopImage from '../assets/Photos/photoshop.png'
import BasicTimeline from './Timeline';

const Experience = () => {
    const progLanguage = [
        { image: htmlImage, alt: 'HTML Logo' },
        { image: cssImage, alt: 'CSS Logo' },
        { image: javascriptImage, alt: 'JavaScript Logo' },
        { image: cppImage, alt:'C++ Logo'},
        { image: pythonImage, alt: 'Python Logo' },
        { image: phpImage, alt: 'Php Logo' },
    ];
    const frameworks = [
        { image: bootstrapImage, alt:'Bootstrap Logo' },
        { image: tailwindImage, alt: 'Tailwindcss Logo' },
        { image: reactImage, alt: 'React Logo' },
        { image: sqlImage, alt:'MySQL Logo'},
        { image: mongodbImage, alt: 'Mongodb Logo' },
    ];
    const graphics = [
        { image: canvaImage, alt:'Canva Logo'},
        { image: photoshopImage, alt:'Photoshop Logo'},
        { image: illusImage, alt: 'Illustrator Logo' },
        { image: premiereImage, alt:'Premiere Logo'},
        { image: capcutImage, alt: 'Capcut Logo' },
    ]

    return (
        <div className='bg-slate-950 text-white py-8'>
            <div className='flex md:flex-row justify-center flex-col'>
                <div className='flex flex-col items-center justify-center w-full md:w-1/2 xl:w-1/3'>
                    <h1 className='font-bold text-center mt-8 mb-2'>Technical Skills</h1>
                    <div className="flex flex-col items-center justify-center">
                        <div className="mb-10">
                            <h2 className='text-center mb-4'>Programming Languages</h2>
                            <div className="flex flex-wrap space-x-4 justify-center">
                                {progLanguage.map((progLanguages, index) => (   
                                    <div key={index}>
                                        <img className="size-10 mt-2" src={progLanguages.image} alt={progLanguages.alt} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mb-10">
                            <h2 className='text-center mb-4'>Frameworks / Libraries / Databases</h2>
                            <div className="flex flex-wrap space-x-4 justify-center">
                                {frameworks.map((framework, index) => (
                                    <div key={index}>
                                        <img className="size-10 mt-2" src={framework.image} alt={framework.alt} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className='text-center mb-4'>Multimedia Software</h2>
                            <div className="flex flex-wrap space-x-4 justify-center">
                                {graphics.map((graphic, index) => (
                                    <div key={index}>
                                        <img className="size-10 mt-2" src={graphic.image} alt={graphic.alt} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center w-full md:w-1/2 xl:w-1/3 mt-10'>
                    <h1 className='font-bold text-center mt-6 md:mt-0 mb-2'>Work/Intern Experience</h1>
                    <BasicTimeline />
                </div>
            </div>
        </div>
    );
}

export default Experience;