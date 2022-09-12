import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useRouter } from 'next/router';

const Navbar = ()=>{
	const [nav, setNav] = useState(false);
  	const [shadow, setShadow] = useState(false);
  	const [navBg, setNavBg] = useState('#ecf0f3');
  	const [linkColor, setLinkColor] = useState('#1f2937');
  	const router = useRouter();
  	const MainList = [
		{path:"https://www.linkedin.com/in/yafet-addisu-525107249/", icon:<FaLinkedinIn/>},
		{path:"https://github.com/yafet-123", icon:<FaGithub/>},
		{path:"/#contact", icon:<AiOutlineMail/>},
		{path:"/resume", icon:<BsFillPersonLinesFill/>}
	]
  	const NavbarList=[
  		{path:"/",text:"Home"},
  		{path:"/#about",text:"About"},
  		{path:"/#skills",text:"Skills"},
  		{path:"/#projects",text:"Projects"},
  		{path:"/resume",text:"Resume"},
  		{path:"/#contact",text:"Contact"},
  	]
  	
  	const handleNav = () => {
    	setNav(!nav);
  	};

  	useEffect(() => {
  		// when it will scrolldown greater than 90 it will have navbar will change it style
    	const handleShadow = () => {
      		if (window.scrollY >= 90) {
        		setShadow(true);
      		} else {
        		setShadow(false);
      		}	
    	};
    	window.addEventListener('scroll', handleShadow);
  	}, []);
	return(
		<div style={{ backgroundColor: `${navBg}` }}
			className={
        		shadow ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
 				: 'fixed w-full h-20 z-[100]'
      		}
    	>
    		<div className='flex justify-between items-center w-full h-full px-10 2xl:px-16'>
    			<Link href='/'>
          			<a>
            			<Image
              				src="/navLogo.png"
              				alt='/'
              				width='125'
              				height='50'
              				className='cursor-pointer'
            			/>
          			</a>
        		</Link>
        		<div>
        			<ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
        				{ NavbarList.map((navbar,index)=>(
	          			
	            			<li key={index} className='ml-10 text-sm uppercase hover:border-b'>
	              				<Link href={navbar.path}>{navbar.text}</Link>
	            			</li>
          				))}
        			</ul>
          
          			<div style={{ color: `${linkColor}` }} onClick={handleNav} className='md:hidden'>
            			<AiOutlineMenu size={25} />
          			</div>
        		</div>
      		</div>

      		<div className={ nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : '' }>
      			<div
          			className={
            			nav
              			? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              			: 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          			}
        		>
        			<div>
	        			<div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
	        				<Link href='/'>
	          					<a>
						            <Image
						            	src="/navLogo.png"
						            	alt='/'
						            	width='125'
						            	height='50'
						            	className='cursor-pointer'
						            />
						        </a>
						        
	        				</Link>
	        				<div
	    						onClick={handleNav}
	    						className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
	              			>
	                			<AiOutlineClose />
	              			</div>
        				</div>

        				<div className='border-b border-gray-300 my-4'>
              				<p className='w-[85%] md:w-[90%] py-4'>
                				Let&#39;s build something legendary together
              				</p>
            			</div>
 	      			</div>
 	      			<div className='py-4 flex flex-col'>
 	      				<ul className='uppercase'>
 	      					{ NavbarList.map((navbar,index)=>(
	 	      					<Link key={index} href={navbar.path}>
	                				<li onClick={() => setNav(false)} className='py-4 text-sm'>
	                  					{navbar.text}
	                				</li>
	              				</Link>
	              			))}
 	      				</ul>
 	      				<div className='pt-40'>
 	      					<p className='uppercase tracking-widest text-[#5651e5]'>
                				Let&#39;s Connect
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
      		</div>
    	</div>
	)
}

export default Navbar