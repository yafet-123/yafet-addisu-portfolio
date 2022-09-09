import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = ()=>{
	// tracking-widest letter-spacing: 0.1em;
	const MainList = [
		{path:"https://www.linkedin.com/in/clint-briley-50056920a/", icon:<FaLinkedinIn/>},
		{path:"https://github.com/fireclint", icon:<FaGithub/>},
		{path:"/#contact", icon:<AiOutlineMail/>},
		{path:"/resume", icon:<BsFillPersonLinesFill/>}
	]
	return(
		<div id="home" className="w-full h-screen text-center">
			<div className="max-w-[1240px] w-full h-full text-center mx-auto p-2 flex justify-center items-center">
				<div className="">
					<p className="uppercase text-lg tracking-widest text-gray-600">
						LET&#39;S BUILD SOMETHING TOGETHER
					</p>
					<h1 className="py-4 text-gray-700">
						Hi, I&#39;m <span className='text-[#5651e5]'>Yafet</span>
					</h1>						
					<h1 className="py-4 text-gray-700">
						A Full Stack Developer
					</h1>
					<p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
						I&#39;m focused on building responsive front-end web applications while
            			learning back-end technologies.
					</p>
					<div className="flex items-center justify-between max-w-[330px] m-auto py-4">
						{ MainList.map((main,index)=>(
							<Link key={index} href={main.path}>
					        	<a
					        		target='_blank'
	              					rel='noreferrer'
					        	>
					        		<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
					        			{ main.icon }
					        		</div>
					        	</a>
					        </Link>
				        ))}
					</div>
				</div>
			</div>
		</div>
	)
}


export default Main