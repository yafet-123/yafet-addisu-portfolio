import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = ()=>{
	const MainList = [
		{path:"https://www.linkedin.com/in/yafet-addisu-525107249/", icon:<FaLinkedinIn/>},
		{path:"https://yafetaddisu123@gmail.com", icon:<AiOutlineMail/>},
		{path:"/resume", icon:<BsFillPersonLinesFill/>}
	]
	return(
		<div id="contact" className="w-full lg:h-screen">
			<div className="max-w-[1240px] m-auto px-2 py-16 w-full">
				<p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          			Contact
        		</p>

        		<div className="max-w-[600px] mx-auto">
        			<Image
        				className='rounded-xl hover:scale-105 ease-in duration-300'
                  		src="/contact.jpg"
                  		alt='/'
                  		width={1000}
                  		height={500}
        			/>
        		</div>
  
        		<h2 className='py-4'>Get In Touch</h2>
        		<div>	
                	<p className='uppercase pt-8'>Connect With Me</p>
                	<div className='flex items-center justify-between py-4'>
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

        		<div className='flex justify-center py-12'>
          			<Link href='/'>
            			<a>
              				<div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                				<HiOutlineChevronDoubleUp
                  					className='text-[#5651e5]'
                  					size={30}
                				/>
              				</div>
            			</a>
          			</Link>
        		</div>
			</div>
		</div>
	)
}

export default Contact