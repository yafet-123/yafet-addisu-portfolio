import File from '../components/resume/file.jsx';
import { MainHeader } from "../components/common/MainHeader";

const Resume = () => {
    return (
        <main className="w-full h-full bg-white flex flex-col">
            <MainHeader title="Undiscovered Ethiopian Tours: Connect with Undiscovered Ethiopia: Reach Out and Explore Together" />
            <div className="flex flex-col">
                <File />
            </div>
        </main>
    );
};

export default Resume;