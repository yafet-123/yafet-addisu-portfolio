
const ProjectsArray = [
  {
    id:'1',
    title:"Ecff Page",
    image:"/projects/ecff_page.png",
    code:"https://github.com/yafet-123/ecff",
    demo:"https://ecff-challenge.vercel.app/",
    tech:"Next,js / Tailwind",
    overview : "I built this application in Next JS and is hosted on Vercel.This page style in using Tailwind CSS.",
    technology:[
      'Next.js' , 'Tailwind CSS' , 'react-icons'
    ],
  },
  {
    id:'2',
    title:"Online Code Generator",
    image:"/projects/online-code-generator.png",
    code:"https://github.com/yafet-123/Online-Code-Generator",
    demo:"https://yafet-123.github.io/Online-Code-Generator/",
    tech:"HTML / CSS",
    overview : " Simple online code generator done by using html, css , js and qrcode.js and is hosted on Github.",
    technology:[
        'HTML', 'CSS' , 'js' , 'qrcode.js'
      ],
  },
  {
    id:'3',
    title:"Simple Landing Page App",
    image:"/projects/simpleLandingPage.png",
    code:"https://github.com/yafet-123/simple-landing-page-with-tailwind",
    demo:"https://simple-landing-page-with-tailwind.vercel.app/",
    tech:"Next JS / Tailwind",
    overview : " I built this application in Next JS and is hosted on Vercel.",
    technology:[
        "React",
        "Tailwind",
        "Javascript",
        "react-icons",
      ],
  },
  {
    id:"4",
    title:"Uber Clone",
    image:"/projects/UberClone.png",
    code:"https://github.com/yafet-123/Uber-clone",
    demo:"https://uber-clone-chi-neon.vercel.app/",
    tech:"Next JS / Tailwind ",
    overview : " I built this application in Next JS and is hosted on Vercel.This application is pulling map from an the mapbox-gl API and displaying the map for user. The user can select ride it can be car or bicycle then the user insert the startup and the end location then the app calculate the amount of money by using the car selected and the price.",
    technology:[
        "Next.JS",
        "Tailwind",
        "Javascript",
        "mapbox-gl"

      ],
  },
];

export function getAllProjects() {
  return ProjectsArray;
}

export function getProjectById(id) {
  return ProjectsArray.filter((project) => project.id === id);
}