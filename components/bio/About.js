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
						I am a Full Stack web developer with rich experience developing complete web apps 
						and websites based on JavaScript using React.js and Next.js as my main frontend 
						framework. I have also experience with node.js for backend support along with all 
						the logic projects need including database and API support. I am a dedicated developer 
						with a commitment to perfect development works I work on. I enjoy making iterative 
						improvements until a project I work on gets completed with the best results. 
						I am also passionate about teaching, especially programming and computer science, 
						and I have worked with college students, high schools, and others alike.
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