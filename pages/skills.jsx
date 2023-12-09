import { MainHeader } from "../components/common/MainHeader";
import CommonHeroSection from '../components/skills/CommonHeroSection.jsx';
import Skill from "../components/skills/Skill"


export default function Skills() {
  return (
    <main className="w-full h-full bg-white flex flex-col">
      <MainHeader title="Undiscovered Ethiopian Tours: Connect with Undiscovered Ethiopia: Reach Out and Explore Together" />
      <div className="flex flex-col">
        <CommonHeroSection 
          background="contact-background"
          Tagline="Skills & Expertise"
        />
        <div className="flex flex-col md:flex-row md:justify-around  gap-10 py-10 bg-greenbay-white text-white">
          <Skill />
        </div>
      </div>
    </main>
  );
}


