import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/router'

const ProjectItem = ({title, backgroundImg, tech, projectUrl, data})=>{
	const router = useRouter();
	const handleGoto = async ()=>{
        router.push({
            pathname: '/detail',
            query: { data: data },
        })
    }
	return(
		<div className="group relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
			<Image className="rounded-xl group-hover:opacity-10" width={1000} height={1000} src={backgroundImg} alt="/" />
			<div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        		<h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        		<p className='pb-4 pt-2 text-white text-center'>{tech}</p>
        		<p 
        			onClick={handleGoto}
        			className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'
          		>
            		More Info
        		</p>
    		</div>
		</div>
	)
}

export default ProjectItem