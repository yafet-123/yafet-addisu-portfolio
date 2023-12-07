import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaYoutube,
  FaTwitter,
} from 'react-icons/fa';

export default function ReachUs(){
  const socialMediaLinks = [
    {
      icon: <FaFacebook size={30} color="white" className="cursor-pointer" />,
      path: '/',
    },
    {
      icon: <FaYoutube size={30} color="white" className="cursor-pointer " />,
      path: '/',
    },
    {
      icon: <FaLinkedin size={30} color="white" className="cursor-pointer" />,
      path: '/',
    },
    {
      icon: <FaInstagram size={30} color="white" className="cursor-pointer" />,
      path: '/',
    },
    {
      icon: <FaTwitter size={30} color="white" className="cursor-pointer" />,
      path: '/',
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center gap-6 md:gap-10">
      <div className="flex flex-col px-2 lg:px-10 w-full">
        <h1 className="font-poppins font-bold text-4xl lg:tetx-6xl text-left text-[#010101] mb-5">
          Contact
        </h1>
        <div className="font-poppins text-left text-[#010101]">
          <p className="font-normal text-xl lg:text-2xl mb-5">

            <span>yafetaddisu@gmail.com</span>
          </p>
          <p className="font-normal text-xl lg:text-2xl mb-5">Sderot hachmel Israel 32</p>
          <p className="font-normal text-xl lg:text-2xl mb-5">WhatsApp: +9725353323525</p>
        </div>

        <div className="flex gap-4">
          {socialMediaLinks.map((paths, index) => {
            return (
              <Link key={index} href={paths.path} target="_blank">
                {paths.path}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
