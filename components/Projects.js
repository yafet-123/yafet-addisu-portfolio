import Image from 'next/image';
import Link from 'next/link';
import ProjectItem from './ProjectItem';

const Projects = ()=>{
	const projectsList = [
		{title:"Property Finder",path:"/projects/property.jpg",projectUrl:"/property",tech:"React JS"},
		{title:"Crypto App",path:"/projects/crypto.jpg",projectUrl:"/crypto",tech:"React JS"},
		{title:"Netflix App",path:"/projects/netflix.jpg",projectUrl:"/netflix",tech:"React JS"},
		{title:"Twitch UI",path:"/projects/twitch.jpg",projectUrl:"/twitch",tech:"Next.js"},
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
	            			tech={project.tach}
	        			/>
        			))}
        		</div>
			</div>
		</div>
	)
}

export default Projects