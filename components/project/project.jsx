import Image from 'next/image';
import Link from 'next/link';
import { RiRadioButtonFill } from 'react-icons/ri';

const Project = ({project})=>{
	const technology = project.technology
	return(
		<div className='w-full'>
			<div className='h-[70vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[70vh] bg-black/70 z-10' />
	                <Image
	                    src={project.image}
	                    className='absolute z-1'
	                    layout='fill'
	                    objectFit='cover'
	                    alt='/'
	                />  
	                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
	                    <h2 className='py-2 text-white font-bold text-xl lg:text-5xl'>{project.title}</h2>
	                    <h3 className="py-2 text-white font-bold text-lg lg:text-2xl">{project.tech}</h3>
	                </div>
            	</div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <div className='col-span-4'>
                    <h2 className='py-5 text-black font-bold text-xl lg:text-4xl'>Project Overview</h2>
                    <p className="py-2 font-normal text-lg lg:text-xl">
                        {project.overview}
                    </p>
                    <div className="flex">
                        <a
                            href={project.code}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <p className='px-8 py-2 font-bold mt-4 mr-8 border rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>Code</p>
                        </a>
                        <a
                            href={project.demo}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <p className='px-8 py-2 font-bold mt-4 border rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>Demo</p>
                        </a>
                    </div>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2 text-lg lg:text-xl'>Technologies</p>
                        <div className='grid grid-cols-2 md:grid-cols-1'>
                            { technology?.map((tech,index)=>(
                               <p key={index} className='text-gray-600 py-2 flex items-center text-md lg:text-lg'>
                                    <RiRadioButtonFill className='pr-1' /> {tech}
                                </p> 
                            ))}
                        </div>
                    </div>
                </div>
                <Link href='/projects'>
                    <p className='px-8 py-2 font-bold mt-4 mr-8 border rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text underline cursor-pointer font-bold text-lg lg:text-xl'>Back</p>
                </Link>
            </div>
		</div>
	)
}

export default Project