import Image from 'next/image';
import Link from 'next/link';
import ProjectItem from './ProjectItem';

const Projects = ()=>{
	const projectsList = [
		{id:"1",title:"Simple Landing Page App",path:"/projects/simpleLandingPage.png",projectUrl:"/detail",tech:"Next.js",data:"SimpleLandingPage"},
		{id:"2",title:"Uber Clone",path:"/projects/UberClone.png",projectUrl:"/detail",tech:"Next.JS",data:"UberClone"},
		{id:"3",title:"Online Code Generator",path:"/projects/online-code-generator.png",projectUrl:"/detail",tech:"HTML /CSS",data:"OnlineCodeGenerator"},
		{id:"4",title:"Ecff Page",path:"/projects/ecff_page.png",projectUrl:"/detail",tech:"Next.js / Tailwind CSS",data:"ecff"},
	]
	return(
		<div id='projects' className='w-full'>
			<div className="px-20 py-5">
        		<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        			{ projectsList.map((project,index)=>(
	        			<ProjectItem
	        				id={project.id} 
	        				key={index}
	        				title={project.title}
	            			backgroundImg={project.path}
	            			projectUrl={project.projectUrl}
	            			tech={project.tech}
	            			data={project.data}
	        			/>
        			))}
        		</div>
			</div>
		</div>
	)
}

export default Projects