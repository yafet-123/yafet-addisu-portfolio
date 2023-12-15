import { useRouter } from 'next/router';
import React, {useState} from 'react'
import Image from 'next/image'
import Slider, { Settings, LazyLoadTypes } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
const CommonHeroSection = ({background,Tagline,Welcome_Message}) => {
  const router = useRouter();
  const [paddingTop, setPaddingTop] = useState("0");
  return (
    <div className={`flex flex-col lg:flex-row h-full md:h-[600px] pt-28 px-2 md:px-32 bg-zinc-300`}>
      <div className="text-black flex flex-col justify-center font-normal text-center w-full mb-5 lg:mb-0 px-5">
          <h1 className="text-2xl md:text-4xl font-bold mb-5">
            {Tagline}
          </h1>
          <h1 className="text-xl text-center md:text-2xl mb-5 leading-10">
             {Welcome_Message}
          </h1>
      </div>
    </div>
  );
};

export default CommonHeroSection