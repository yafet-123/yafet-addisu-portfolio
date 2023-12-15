import Image from 'next/image'
import Link from 'next/link'
import React,{useState} from 'react';

const About = ()=>{
	const [paddingTop, setPaddingTop] = useState("0");
	return(
		<div id="about" className="w-full p-2 flex flex-col pt-24 px-2 md:px-10 bg-[#e6e6e6ff]">
			<div className="flex flex-row justify-center md:justify-between items-center my-5">
				<h1 className="font-sans font-bold text-[2.1rem] leading-[2.35rem] text-center md:text-left text-[#010101] w-full tracking-[0.16rem] mb-5">
					BIO
				</h1>
				<Link href="/#projects">
					<a className="text-white rounded-xl text-center w-96 md:w-52 bg-gradient-to-r from-[#1A3E58] to-purple-500 font-sans font-bold text-lg md:text-xl py-4 cursor-pointer">
						Latest projects					
					</a>
				</Link>
			</div>
			<p className="hidden md:flex font-sans font-extralight text-[1.45rem] leading-[3rem] text-left text-[#010101] w-full mt-5 lg:mt-0">
				{`Hello! I'm Yafet Addisu, a dedicated full-stack developer with a passion for crafting innovative and scalable digital 
				solutions. With a strong foundation in both front-end and back-end technologies, I specialize in bringing ideas to life 
				through clean, efficient, and user-centric code.`}
			</p>
			<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
				<div className="flex flex-col">
					<p className="font-sans font-extralight text-[1.45rem] leading-[3rem] text-left text-[#010101] w-full mt-5 lg:mt-0">
						<span className="flex md:hidden">
							{`Hello! I'm Yafet Addisu, a dedicated full-stack developer with a passion for crafting innovative and scalable digital 
							solutions. With a strong foundation in both front-end and back-end technologies, I specialize in bringing ideas to life 
							through clean, efficient, and user-centric code. `}
						</span>
						<span>
							{`My journey in web development began with a fascination for creating seamless user interfaces using HTML, CSS, 
							and JavaScript.Over the years, I've evolved into a full-stack developer, 
							proficient in utilizing frameworks like React.js for dynamic front-end experiences.
							On the back end, I excel in implementing robust server-side solutions using technologies such as Node.js and Express. 
							I've mastered database integration, including MongoDB and Prisma, ensuring efficient data management and retrieval.
							GitHub is my collaborative playground, where I showcase my commitment to version control and best coding practices. 
							From crafting RESTful APIs to deploying applications with Next.js, I'm committed to staying on the cutting edge of 
							technology. `}
						</span>
						<span className="flex md:hidden">
							{`With an eye for detail and a dedication to delivering high-quality solutions, I'm excited about the 
							opportunity to contribute my skills to your projects.Let's collaborate and turn your ideas into powerful, 
							interactive, and visually stunning digital experiences.`}
						</span>
					</p>
				</div>

				<div className={`w-full h-72 md:h-[500px] relative mx-auto`}>
	              	<Image 
	                	src="/profile.jpeg"
	                	alt="profile image" 
	                	layout="fill"
	                	objectFit="cover"
	                	priority
	              	/>
	            </div>
			</div>
			<p className="hidden md:flex font-sans font-extralight text-[1.45rem] leading-[3rem] text-left text-[#010101] w-full mt-5 lg:mt-0">
				{`With an eye for detail and a dedication to delivering high-quality solutions, I'm excited about the 
				opportunity to contribute my skills to your projects.Let's collaborate and turn your ideas into powerful, interactive, 
				and visually stunning digital experiences.`}
			</p>
		</div>
	)
}

export default About