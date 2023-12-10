import { MainHeader } from "../components/common/MainHeader";
import About from '../components/bio/About.jsx';

export default function Bio() {
  return (
    <main className="w-full h-full bg-white flex flex-col">
      <MainHeader title="Undiscovered Ethiopian Tours: Connect with Undiscovered Ethiopia: Reach Out and Explore Together" />
      <div className="flex flex-col">
        <About />
      </div>
    </main>
  );
}