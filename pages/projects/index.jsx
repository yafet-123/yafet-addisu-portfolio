import { MainHeader } from "../../components/common/MainHeader";
import CommonHeroSection from '../../components/project/CommonHeroSection.jsx';
import Projects from "../../components/project/Projects"
import { getAllProjects } from '../../data/projects';

export default function Contact({all_projects}) {

  return (
    <main className="w-full h-full bg-white flex flex-col">
      <MainHeader title="Undiscovered Ethiopian Tours: Connect with Undiscovered Ethiopia: Reach Out and Explore Together" />
      <div className="flex flex-col">
        <CommonHeroSection 
          background="contact-background"
          Tagline="Projects"
          Welcome_Message="WebCraft and PythonAlchemy showcase my prowess in both full-stack web development and Python. In WebCraft, I led the development of a modern, responsive website using HTML5, CSS3 (Sass), and React.js, achieving a 20% increase in user engagement. Simultaneously, PythonAlchemy demonstrates my versatility with Python, delivering elegant solutions from data analysis to automation scripts. These projects reflect my commitment to creating seamless digital experiences and leveraging Python's power across diverse applications."
        />
        <div className="flex flex-col md:flex-row md:justify-around  gap-10 py-10 bg-greenbay-white text-white">
          <Projects projects={all_projects} />
        </div>
      </div>
    </main>
  );
}

export const getStaticProps = async (context) => {
  const all_projects = getAllProjects();
  // console.log(all_projects)

  if (!all_projects) {
    return {
      notFound: true,
    };
  }

  return {
    props: { all_projects: all_projects },
    revalidate: 3600,
  };
};