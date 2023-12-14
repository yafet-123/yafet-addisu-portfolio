import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/router'

const ProjectItem = ({title, backgroundImg, demo,id, project})=>{
	const router = useRouter();
	const handleSeeProject = (projectId) => {
    	router.push(`/projects/${projectId}`);
  	};
	return(
		<div className="flex flex-col">
			<Link
	      		href={`/projects/${project.id}`}
	      		key={project.id}
	    	>
	    		<a className="text-white flex flex-col cursor-pointer shadow-md hover:shadow-xl ">
		      		<div className="relative h-[400px] w-full">
		        		<Image
		          			src={backgroundImg} 
							alt={title} 
		          			className="h-full w-full"
		          			layout="fill"
		        		/>
		      		</div>
		      	</a>
	    	</Link>
	    	<div className="flex flex-col border shadow-2xl p-5 shadow-inherit overflow-hidden hover:scale-95 transition-transform duration-300">
		    	<h1 className="my-[1rem] text-left font-poppins font-semibold text-[1.3rem] text-[#010101] text-center">
					{title}
				</h1>
		    	<div className="flex justify-between items-center">
			    	<Link href={demo}>
						<a className="text-white rounded-xl text-center px-2 bg-gradient-to-r from-[#1A3E58] to-purple-500 font-sans font-bold text-lg md:text-xl py-4 cursor-pointer">
							Demo					
						</a>
					</Link>

					<button onClick={() => handleSeeProject(project.id)}>
						<a className="text-white rounded-xl text-center px-5 bg-gradient-to-r from-[#1A3E58] to-purple-500 font-sans font-bold text-lg md:text-xl py-4 cursor-pointer">
							Detail					
						</a>
					</button>
			   	</div>
			</div>
	    </div>
	)
}

export default ProjectItem