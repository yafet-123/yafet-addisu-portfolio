import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/router'

const ProjectItem = ({title, backgroundImg, demo, project})=>{
	const router = useRouter();
	const handleSeeProject = (projectId) => {
    	router.push(`/projects/${projectId}`);
  	};
	return(
		<div className="flex flex-col">
			<button 
				onClick={() => handleSeeProject(project.id)}
				className="text-white flex flex-col cursor-pointer shadow-md hover:shadow-xl "
			>
		      	<div className="relative h-[200px] md:h-[400px] w-full">
		        	<Image
		          		src={backgroundImg} 
						alt={title} 
		          		className="h-full w-full"
		          		layout="fill"
		        	/>
		      	</div>
	    	</button>
	    	<div className="flex flex-col border shadow-2xl p-5 shadow-inherit overflow-hidden transition-transform duration-300">
		    	<h1 className="my-[1rem] text-left font-poppins font-semibold text-[1.3rem] text-[#010101] text-center">
					{title}
				</h1>
		    	<div className="flex justify-between items-center">
			    	<Link href={demo}>
						<a className="text-white text-center px-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text border rounded-lg font-sans font-bold text-lg md:text-xl px-4 py-4 cursor-pointer">
							Demo					
						</a>
					</Link>

					<button onClick={() => handleSeeProject(project.id)}>
						<a className="text-white text-center px-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text border rounded-lg font-sans font-bold text-lg md:text-xl px-4 py-4 cursor-pointer">
							Detail					
						</a>
					</button>
			   	</div>
			</div>
	    </div>
	)
}

export default ProjectItem