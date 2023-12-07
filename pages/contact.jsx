import { MainHeader } from "../components/common/MainHeader";
import CommonHeroSection from '../components/contact/CommonHeroSection.jsx';
import ContactForm from "../components/contact/ContactForm"
import ReachUs from "../components/contact/ReachUs"
import ImageOne from '../public/projects/ecff_page.png';
import ImageTwo from '../public/projects/online-code-generator.png';
import ImageThree from '../public/projects/simpleLandingPage.png';
import ImageFour from '../public/projects/UberClone.png';

export default function Contact() {
  const photos = [
    {
      image:ImageOne
    },
    {
      image:ImageTwo
    },
    {
      image:ImageThree
    },
    {
      image:ImageFour
    },
  ];

  return (
    <main className="w-full h-full bg-white flex flex-col">
      <MainHeader title="Undiscovered Ethiopian Tours: Connect with Undiscovered Ethiopia: Reach Out and Explore Together" />
      <div className="flex flex-col">
        <CommonHeroSection 
          background="contact-background"
          Tagline="Contact Me"
          photos={photos}
          Welcome_Message="Hello, I'm Yafet Addisu, a passionate website developer. Whether you have a project in mind, want to collaborate, or simply have a question, I'm here to help. Feel free to reach out through the form below, and I'll get back to you as soon as possible. Let's turn your ideas into reality!"
        />
        <div className="flex flex-col md:flex-row md:justify-around  gap-10 py-10 bg-greenbay-white text-white">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}