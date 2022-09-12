import React from 'react';
import Head from 'next/head';
import Link from 'next/link'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Resume = () => {
    return (
        <>
            <Head>
                <title>Yafet | Resume</title>
                <meta
                    name='description'
                    content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
                />
                <link rel='icon' href='/fav.png' />
            </Head>

            <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
                <h1 className='text-center'>Resume</h1>
                <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
                    <h2 className='text-center'>Yafet Addisu</h2>
                    <div className='flex'>
                        <Link href='https://www.linkedin.com/in/yafet-addisu-525107249/'>
                            <a
                                
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
                            </a>
                        </Link>
                        <Link href='https://github.com/yafet-123'>
                            <a
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaGithub size={20} style={{ marginRight: '1rem' }} />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
                    <div className='hidden sm:block'>
                        <p>
                            Web Development{' '} <span className='px-1'>|</span> Complex Problem Solving
                        </p>
                    </div>
                    <div className='block sm:hidden'>
                        <p>Proven Leadership</p>
                        <p className='py-2'>Web Development</p>
                        <p>Complex Problem Solving</p>
                    </div>
                </div>
                <p>
                    Analytical, innovative, and motivated web development professional
                    with experience team work, and organizational effectiveness in fast-paced and challenging
                    environments. Adept at developing strategies and driving streamlined
                    operations. Diverse analytical skills, team collaboration, and
                    relationship building. Consummate professional, and motivated leader,
                    with solid interpersonal abilities and complex problem-solving skills.
                    Effective and proven track record of critical thinking, idea
                    generation, and optimizing efficiencies.
                </p>

                <div className='text-center py-4'>
                    <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
                    <p className='py-2'>
                        <span className='font-bold'>Technical Skills</span>
                        <span className='px-2'>|</span>Front-End Web Developer
                        <span className='px-2'>|</span> HTML <span className='px-2'>|</span>
                        CSS <span className='px-2'>|</span>React
                        <span className='px-2'>|</span>Tailwind
                        <span className='px-2'>|</span> Firebase
                    </p>
                    <p className='py-2'>
                        <span className='font-bold'>Backend</span>
                        <span className='px-2'>|</span> Node.js
                        <span className='px-2'>|</span> Rest Api
                    </p>

                    <p className='py-2'>
                        <span className='font-bold'>Database</span>
                        <span className='px-2'>|</span> Postgress
                        <span className='px-2'>|</span> Mongodb
                        <span className='px-2'>|</span> Sanity
                    </p>
                </div>

                
            </div>
        </>
    );
};

export default Resume;