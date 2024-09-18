
import Header from "../components/header";
import { promises as fs } from 'fs';
import { PageFile } from "../components/shared/contracts";
import DesHero from "../components/desHero";

export default async function Destination() {
    const file = await fs.readFile(process.cwd() + '/src/data.json' , 'utf8');
    const File : PageFile = JSON.parse(file)
  return (
    <>
      <div className="h-screen bg-Blue-900">
        <div className="destinationBackground h-screen mx-auto max-w-[1440px] transitionPage">
            <Header />
            <div className="lg:mx-40 md:mx-10 lg:mt-12 md:mt-10">
                <div className="flex items-center">
                    <span className="font-Barlow-Condensed text-white/20 font-bold text-[28px] tracking-[4.72px]">01</span>
                    <h2 className="font-Barlow-Condensed text-[28px] tracking-[4px] text-white ml-6">PICK YOUR DESTINATION</h2>
                </div>
            </div>
            <DesHero File={File}/>
        </div>
      </div>
    </>
  );
}
