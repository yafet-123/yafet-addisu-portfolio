import { useRouter } from 'next/router';
import React, {useState} from 'react'
import Image from 'next/image'
import Slider, { Settings, LazyLoadTypes } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
const CommonHeroSection = ({background,Tagline,Welcome_Message}) => {
  const router = useRouter();
  var settings = {
    dots: false,
    lazyLoad: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 3000,
  };
  const [paddingTop, setPaddingTop] = useState("0");
  return (
    <div className={`flex flex-col lg:flex-row h-full pt-28 md:px-10 bg-zinc-300`}>
      <div className="text-black flex flex-col justify-center items-center font-normal text-left w-full mb-5 lg:mb-0 px-5">
          <h1 className="text-2xl text-center font-bold md:text-4xl mb-5">
            {Tagline}
          </h1>
          <h1 className="flex flex-col text-xl text-center md:text-2xl mb-5 leading-10">
              <span className="mb-5">
                {`Hello, I'm Yafet Addisu, a dedicated website developer with a passion for crafting seamless and innovative digital experiences. 
                My skill set encompasses a robust understanding of front-end technologies, including HTML5, CSS3, and JavaScript. I specialize 
                in building responsive and user-friendly interfaces, and I'm proficient in utilizing popular frameworks like React.js for 
                dynamic web applications.`}
              </span>
              <span className="mb-5">
                {`On the back end, I have hands-on experience with Node.js and Express, allowing me to create robust and scalable server-side 
                solutions. I'm also adept at version control with Git and collaboration using platforms like GitHub.`}
              </span>
              <span className="mb-5">
                {`With a keen eye for design and a commitment to staying updated on the latest industry trends, I strive to deliver web solutions 
                that not only meet technical requirements but also exceed user expectations. I am excited about the opportunity to contribute 
                my skills to your projects and bring your ideas to life. Let's build something amazing together!`}
              </span>
          </h1>
      </div>
    </div>
  );
};

export default CommonHeroSection



        

        