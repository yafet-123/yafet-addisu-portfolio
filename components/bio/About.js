import Image from 'next/image'
import Link from 'next/link'

const About = ()=>{
	return(
		<div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<p className="uppercase text-xl tracking-widest text-[#5651e5]">
						About
					</p>
					<h2 className="py-4">Who I Am</h2>
					<p className="py-4 text-gray-600">
						I am not a average developer
					</p>

					<p className="py-4 text-gray-600">
						{`Hello! I'm Yafet Addisu, a dedicated full-stack developer with a passion for crafting innovative and scalable digital 
						solutions. With a strong foundation in both front-end and back-end technologies, I specialize in bringing ideas to life 
						through clean, efficient, and user-centric code.My journey in web development began with a fascination for creating 
						seamless user interfaces using HTML, CSS, and JavaScript. Over the years, I've evolved into a full-stack developer, 
						proficient in utilizing frameworks like React.js for dynamic front-end experiences.
						On the back end, I excel in implementing robust server-side solutions using technologies such as Node.js and Express. 
						I've mastered database integration, including MongoDB and Prisma, ensuring efficient data management and retrieval.
						GitHub is my collaborative playground, where I showcase my commitment to version control and best coding practices. 
						From crafting RESTful APIs to deploying applications with Next.js, I'm committed to staying on the cutting edge of 
						technology.With an eye for detail and a dedication to delivering high-quality solutions, I'm excited about the 
						opportunity to contribute my skills to your projects. Let's collaborate and turn your ideas into powerful, interactive, 
						and visually stunning digital experiences.`}
					</p>


					<Link href="/#projects">
						<a>
							<p className="py-2 text-gray-600 underline cursor-pointer">
								Check out some of my latest projects.
							</p>
						</a>
					</Link>
				</div>
				<div className="w-full h-fit m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-90 ease-in duration-300">
					<Image src="/profile.jpeg" width={1000} height={1000} className="rounded-xl" alt="/" />
				</div>
			</div>
		</div>
	)
}

export default About