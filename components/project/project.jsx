import Image from 'next/image';
import Link from 'next/link';
import { RiRadioButtonFill } from 'react-icons/ri';

const Project = ({project})=>{
	const technology = project.technology
	return(
		<div className='w-full'>
			<div className='h-[60vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[60vh] bg-black/70 z-10' />
	                <Image
	                    src={project.image}
	                    className='absolute z-1'
	                    layout='fill'
	                    objectFit='cover'
	                    alt='/'
	                />  
	                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
	                    <h2 className='py-2'>{project.title}</h2>
	                    <h3>{project.tech}</h3>
	                </div>
            	</div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                        {project.overview}
                    </p>
                    <a
                        href={project.code}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 mt-4 mr-8'>Code</button>
                    </a>
                    <a
                        href={project.demo}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 mt-4'>Demo</button>
                    </a>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            { technology?.map((tech,index)=>(
                               <p key={index} className='text-gray-600 py-2 flex items-center'>
                                    <RiRadioButtonFill className='pr-1' /> {tech}
                                </p> 
                            ))}
                        </div>
                    </div>
                </div>
                <Link href='/#projects'>
                    <p className='underline cursor-pointer'>Back</p>
                </Link>
            </div>
		</div>
	)
}

export default Project