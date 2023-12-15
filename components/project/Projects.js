import Image from 'next/image';
import Link from 'next/link';
import ProjectItem from './ProjectItem';

const Projects = ({projects})=>{
	console.log(projects)
	return(
		<div id='projects' className='w-full'>
			<div className="px-2 md:px-20 py-5">
        		<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        			{ projects.map((project,index)=>(
	        			<ProjectItem
	        				project={project}
	        				key={index}
	        				title={project.title}
	            			backgroundImg={project.image}
	            			demo={project.demo}
	        			/>
        			))}
        		</div>
			</div>
		</div>
	)
}

export default Projects