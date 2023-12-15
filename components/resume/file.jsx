import React from 'react';
import Head from 'next/head';
import Link from 'next/link'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
 
const File = () => {

  return (
    <div className='px-2 lg:px-40 pt-28 h-full bg-[#e6e6e6ff] text-black'>
      <h1 className="font-sans font-bold text-[2.1rem] leading-[2.35rem] text-center w-full tracking-[0.16rem] mb-5">
        Resume
      </h1>
      <div className='bg-white my-4 p-4 w-full flex justify-between items-center text-black rounded-xl'>
        <h2 className='text-center font-sans font-bold text-[1.5rem] leading-[2.35rem] tracking-[0.16rem]'>Yafet Addisu</h2>
        <div className='flex'>
          <Link href='https://www.linkedin.com/in/yafet-addisu-525107249/'>
            <a target='_blank' rel='noreferrer'>
              <FaLinkedinIn size={30} style={{ marginRight: '1rem' }} />
            </a>
          </Link>
          <Link href='https://github.com/yafet-123'>
            <a target='_blank' rel='noreferrer'>
              <FaGithub size={30} style={{ marginRight: '1rem' }} />
            </a>
          </Link>
        </div>
      </div>
      <div className='text-center py-4 font-bold uppercase text-[1.75rem] leading-[2rem] tracking-wider'>
        <div className='hidden sm:block'>
          <p> Web Development{' '} <span className='px-1'>|</span> Complex Problem Solving</p>
        </div>
        <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
        </div>
      </div>
      <p className="font-sans font-normal text-[1.25rem] leading-[2rem] text-center w-full tracking-[0.16rem] mb-5">
        Analytical, innovative, and motivated web development professional
        with experience team work, and organizational effectiveness in fast-paced and challenging
        environments. Adapt at developing strategies and driving streamlined
        operations. Diverse analytical skills, team collaboration, and
        relationship building. Consummate professional, and motivated leader,
        with solid interpersonal abilities and complex problem-solving skills.
        Effective and proven track record of critical thinking, idea
        generation, and optimizing efficiencies.
      </p>

      <div className='font-sans font-normal text-center mb-5'>
        <h5 className='underline text-[1.50rem] leading-[2rem] tracking-[0.16rem] py-2'>Skills</h5>
        <p className="font-sans font-bold text-[1.25rem] leading-[2rem] tracking-[0.16rem]">Technical Skills</p>
        <p className='py-2'>
          <span className='font-bold text-[1.25rem] leading-[2rem]'>Front End Web Developer</span>
          <span className='px-2 font-normal text-[1rem] leading-[2rem] tracking-wider'>| HTML</span>  
          <span className='px-2 font-normal text-[1rem] leading-[2rem] tracking-wider'>| CSS</span> 
          <span className='px-2 font-normal text-[1rem] leading-[2rem] tracking-wider'>| Javascript</span> 
          <span className='px-2 font-normal text-[1rem] leading-[2rem] tracking-wider'>| React</span> 
          <span className='px-2 font-normal text-[1rem] leading-[2rem] tracking-wider'>| Next.js</span> 
          <span className='px-2 font-normal text-[1rem] leading-[2rem] tracking-wider'>| Tailwind CSS</span> 
          <span className='px-2 font-normal text-[1rem] leading-[2rem] tracking-wider'>| Bootstrap</span> 
          <span className='px-2 font-normal text-[1rem] leading-[2rem] tracking-wider'>| MaterailUI</span> 
        </p>
        <p className='py-2'>
          <span className='font-bold text-[1.25rem] leading-[2rem]'>Backend End</span>
          <span className='px-2 font-normal text-[1rem] leading-[2rem] tracking-wider'>| Node.js</span> 
          <span className='px-2 font-normal text-[1rem] leading-[2rem] tracking-wider'>| Express.js</span> 
          <span className='px-2 font-normal text-[1rem] leading-[2rem] tracking-wider'>| Rest Api</span> 
          <span className='px-2 font-normal text-[1rem] leading-[2rem] tracking-wider'>| GraphQL</span> 
        </p>

        <p className='py-2'>
          <span className='font-bold text-[1.25rem] leading-[2rem]'>Database</span>
          <span className='px-2 font-normal text-[1rem] leading-[2rem] tracking-wider'>| Postgress</span> 
          <span className='px-2 font-normal text-[1rem] leading-[2rem] tracking-wider'>| Mongodb</span> 
          <span className='px-2 font-normal text-[1rem] leading-[2rem] tracking-wider'>| Sanity</span> 
          <span className='px-2 font-normal text-[1rem] leading-[2rem] tracking-wider'>| Firebase</span> 
        </p>

        <p className='py-2'>
          <span className='font-bold text-[1.25rem] leading-[2rem]'>Other</span>
          <span className='px-2 font-normal text-[1rem] leading-[2rem] tracking-wider'>| Python</span> 
          <span className='px-2 font-normal text-[1rem] leading-[2rem] tracking-wider'>| Typescript</span> 
        </p>
      </div>               
    </div>
  );
};

export default File



        

        