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
        <div className='bg-slate-950 text-white py-8 mx-auto'>
            <div className='flex md:flex-row flex-col md:justify-evenly'>
             <div className="flex justify-center">
            <hr className="border-t border-gray-300 w-5/6 md:w-9/12 lg:w-5/12" />
            </div>

            <div className='flex flex-col md:w-1/ md:max-w-96'>
            <h1 className='font-bold text-center mt-8 mb-2'>Programming Languages</h1>
            <div className="flex flex-wrap space-x-1 md:space-x-4 justify-center md:justify-center md:ml-18">
                {progLanguage.map((progLanguages, index) => (
                    <div key={index}>
                        <img className="w-14 h-14 mt-2" src={progLanguages.image} alt={progLanguages.alt} />
                    </div>
                ))}
            </div>
            <h1 className='font-bold text-center md:justify-center mb-2 mt-10'>Frameworks / Libraries / Databases</h1>
            <div className="flex space-x-4 flex-wrap justify-center md:justify-center md:ml-18">
                {frameworks.map((framework, index) => (
                    <div key={index}>
                        <img className="w-14 h-14 mt-2" src={framework.image} alt={framework.alt} />
                    </div>
                ))}
            </div>
            <h1 className='font-bold text-center md:justify-center  mb-2 mt-10'>Multimedia Software</h1>
            <div className="flex flex-wrap space-x-4 justify-center md:justify-center md:ml-18 ">
                {graphics.map((graphic, index) => (
                    <div key={index}>
                        <img className="w-14 h-14 mt-2" src={graphic.image} alt={graphic.alt} />
                    </div>
                ))}
            </div>
            </div>

            <div className='w-1/2'>
                <h1>adafasfda</h1>
            </div>
            </div>
        </div>
    );
}

export default Experience;