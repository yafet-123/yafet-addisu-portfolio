import Image from 'next/image';
import React from 'react';

const Skill = ()=>{
	const SkillsList= [
		{
			path:"/skills/html.png", 
			name:"Html", 
			text:`I bring a wealth of expertise in HTML to my web development projects. Proficient in creating semantic and 
			well-structured markup, I ensure that the foundation of every website I work on is robust and accessible. 
			From crafting clean and organized code to incorporating the latest HTML5 features, I am dedicated to delivering websites 
			that stand out in both form and function`
		},
		{
			path:"/skills/css.png", 
			name:"Css",
			text:`When it comes to styling and design, my mastery of CSS allows me to transform concepts into visually appealing and 
			responsive web interfaces. I leverage CSS3 to implement creative and modern designs, ensuring a seamless user experience 
			across various devices. From customizing layouts to enhancing user interactions, I take pride in my ability to make web 
			applications not only functional but also visually captivating.`
		},
		{
			path:"/skills/javascript.png", 
			name:"Javascript",
			text:`My proficiency in JavaScript extends to creating dynamic and interactive user experiences. Whether it's working with 
			vanilla JavaScript or utilizing frameworks like React.js, I excel in implementing modern, client-side functionality. From 
			user interface enhancements to building feature-rich applications, I leverage JavaScript to add life and interactivity to 
			the digital spaces I create.`
		},
		{
			path:"/skills/react.png", 
			name:"React",
			text:`I specialize in building dynamic and responsive web applications using React.js. With a deep understanding of component-based 
			architecture, state management, and the virtual DOM, I create interactive user interfaces that deliver a seamless and enjoyable 
			user experience. Whether it's crafting single-page applications or integrating complex features, React is a cornerstone of my 
			development toolkit, enabling me to bring your ideas to life with efficiency and elegance.`
		},
		{
			path:"/skills/tailwind.png", 
			name:"Tailwind",
			text:`In the realm of styling, I leverage the power of Tailwind CSS to streamline the design process and create visually stunning 
			interfaces. Tailwind's utility-first approach allows me to rapidly prototype and iterate, ensuring a responsive and aesthetically 
			pleasing user interface. From customizing color schemes to implementing complex layouts, my proficiency in Tailwind CSS complements 
			my development workflow, allowing me to deliver modern and visually impactful web applications.`
		},
		{
			path:"/skills/firebase.png", 
			name:"Firebase",
			text:`For seamless backend integration and real-time data management, I utilize Firebase as a robust and scalable platform. 
			From authentication and hosting to Firestore database integration, Firebase empowers me to build secure and dynamic web applications. 
			I leverage Firebase's features to create responsive and data-driven applications, providing users with a smooth and engaging 
			experience. With Firebase, I ensure that the applications I develop are not only feature-rich but also scalable and ready for 
			future expansion.`
		},
		{
			path:"/skills/github1.png", 
			name:"Github",
			text:`Collaboration is at the heart of my development process, and I leverage the power of GitHub to streamline version control 
			and project collaboration. Proficient in Git workflows, pull requests, and branching strategies, I ensure a smooth and organized 
			development environment. GitHub serves as a central hub for my projects, showcasing my commitment to clean and well-documented 
			code. Explore my repositories to see how I utilize version control to enhance collaboration and code quality.`
		},
		{
			path:"/skills/nextjs.png", 
			name:"Next.js",
			text:`Next.js is a key tool in my arsenal for building scalable and performant web applications. With its React-based framework,
			I create dynamic and SEO-friendly websites that offer a seamless user experience. From server-side rendering to effortless 
			page routing, Next.js enables me to develop feature-rich applications efficiently. Explore my projects to see how I harness 
			the power of Next.js to bring cutting-edge functionality and optimal performance to web applications.`,
		},
		{
			path:"/skills/mongo.png", 
			name:"Mongodb",
			text:`As a developer, I leverage MongoDB to handle data storage efficiently and flexibly. Proficient in designing schemas,
			performing CRUD operations, and utilizing the MongoDB Atlas cloud service, I ensure robust and scalable backend solutions 
			for my applications. Whether it's crafting databases for e-commerce platforms or implementing real-time data updates,
			MongoDB is a fundamental part of my toolkit. Explore my projects to see how I integrate MongoDB to create dynamic and 
			data-driven web applications.`,
		},
		{
			path:"/skills/prisma.png", 
			name:"Prisma",
			text:`My expertise extends to seamlessly integrating databases using Prisma, a modern and developer-friendly database toolkit.
			With Prisma's intuitive and type-safe query capabilities, I streamline the process of working with databases, enabling efficient 
			data modeling and access. Proficient in setting up and managing database connections, I leverage Prisma to create scalable and 
			maintainable backend solutions for web applications. From defining data models to executing complex queries, Prisma is a key 
			component in my toolkit for crafting robust and performant database-driven applications. Explore my projects to see how I 
			harness the power of Prisma to ensure data consistency and reliability in my web development endeavors.`,
		},
	]
	return(
		<div className='w-full grid grid-cols-1 md:grid-cols-2 gap-10 px-2 md:px-20'>
		 	{ SkillsList.map((skill,index)=>(
	         	<div key={index} className='bg-[#e6e6e6ff] py-6 px-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
	          		<div className='flex flex-col justify-center items-center'>
	            		<div className='m-auto'>
	              			<Image src={skill.path} width='64' height='64' alt='/' />
	            		</div>
	            		<div className='flex flex-col items-center justify-center text-black'>
	              			<h1 className="my-5 text-2xl lg:text-3xl font-bold">{skill.name}</h1>
	              			<p className="text-xl text-center md:text-2xl leading-10 font-normal">{skill.text}</p>
	            		</div>
	          		</div>
	         	</div>
          	))}
        </div>
	)
}

export default Skill
