import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = ()=>{
	// tracking-widest letter-spacing: 0.1em;
	const MainList = [
		{path:"https://www.linkedin.com/in/yafet-addisu-525107249/", icon:<FaLinkedinIn size={30} color="black"/>},
		{path:"https://github.com/yafet-123", icon:<FaGithub size={30} color="black"/>},
		{path:"/#contact", icon:<AiOutlineMail size={30} color="black"/>},
		{path:"/resume", icon:<BsFillPersonLinesFill size={30} color="black"/>}
	]
	return(
		<div id="home" className="w-full h-full text-center bg-[#e6e6e6ff] text-black py-32">
			<div className="text-center p-2 flex mx-auto justify-center items-center">
				<div className="">
					<p className="uppercase font-sans font-bold text-4xl md:text-5xl leading-[2.35rem] text-center w-full tracking-[0.16rem] my-5">
						LET&#39;S BUILD SOMETHING TOGETHER
					</p>
					<h1 className="font-sans font-bold text-3xl md:text-4xl leading-[2.35rem] text-center w-full tracking-[0.16rem] my-5">
						Hi, I&#39;m <span className='text-[#5651e5]'>Yafet</span>
					</h1>						
					<h1 className="font-sans font-bold text-2xl md:text-3xl leading-[2.35rem] text-center w-full tracking-[0.16rem] my-5">
						A Full Stack Developer
					</h1>
					<p className="font-sans font-bold text-xl md:text-2xl leading-[2.35rem] text-center w-full tracking-[0.16rem] my-5">
						I&#39;m focused on building awesome full stack web applications.
					</p>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-5 py-4">
						{ MainList.map((main,index)=>(
							<Link key={index} href={main.path}>
					        	<a
					        		target='_blank'
	              					rel='noreferrer'
					        	>
					        		<div className="w-20 h-20 bg-white rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
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