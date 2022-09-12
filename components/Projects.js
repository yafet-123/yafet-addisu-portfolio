import Image from 'next/image';
import Link from 'next/link';
import ProjectItem from './ProjectItem';

const Projects = ()=>{
	const projectsList = [
		{title:"Property Finder",path:"/projects/simpleLandingPage.png",projectUrl:"/detail",tech:"Next.js",data:"SimpleLandingPage"},
		{title:"Crypto App",path:"/projects/UberClone.png",projectUrl:"/detail",tech:"Next.JS",data:"UberClone"},
		{title:"Online Code Generator",path:"/projects/online-code-generator.png",projectUrl:"/detail",tech:"HTML /CSS",data:"OnlineCodeGenerator"},
	]
	return(
		<div id='projects' className='w-full'>
			<div className="max-w-[1240px] mx-auto px-2 py-16">
				<p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          			Projects
        		</p>
        		<h2 className='py-4'>What I&apos;ve Built</h2>
        		<div className="grid grid-cols-2 gap-8">
        			{ projectsList.map((project,index)=>(
	        			<ProjectItem 
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