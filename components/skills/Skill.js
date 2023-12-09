import Image from 'next/image';
import React from 'react';

const Skill = ()=>{
	const SkillsList= [
		{path:"/skills/html.png", text:"Html"},
		{path:"/skills/css.png", text:"Css"},
		{path:"/skills/javascript.png", text:"Javascript"},
		{path:"/skills/react.png", text:"React"},
		{path:"/skills/tailwind.png", text:"Tailwind"},
		{path:"/skills/firebase.png", text:"Firebase"},
		{path:"/skills/github1.png", text:"Github"},
		{path:"/skills/nextjs.png", text:"Next.js"},
		{path:"/skills/mongo.png", text:"Mongodb"},
		{path:"/skills/prisma.png", text:"Prisma"},
	]
	return(
		<div id="skills" className="w-full lg:h-screen p-2">
			<div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
				<p className="text-xl tracking-widest uppercase text-[#5651e5]">
					Skills
				</p>
				 <h2 className='py-4'>What I Can Do</h2>
				 <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
				 	{ SkillsList.map((skill,index)=>(
	          			<div key={index} className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
	            			<div className='grid grid-cols-2 gap-4 justify-center items-center'>
	              				<div className='m-auto'>
	                				<Image src={skill.path} width='64' height='64' alt='/' />
	              				</div>
	              				<div className='flex flex-col items-center justify-center'>
	                				<h3>{skill.text}</h3>
	              				</div>
	            			</div>
	          			</div>
          			))}
          		</div>
			</div>
		</div>
	)
}

export default Skill
