
import Header from "../components/header";
import { promises as fs } from 'fs';
import { PageFile } from "../components/contracts";
import DesHero from "../components/desHero";

export default async function Destination() {
    const file = await fs.readFile(process.cwd() + '/src/data.json' , 'utf8');
    const File : PageFile = JSON.parse(file)
    // console.log(File.destinations)
  return (
    <>
      <div className="h-screen bg-Blue-900">
        <div className="destinationBackground h-screen mx-auto max-w-[1440px] relative ">
            <Header />
            <div className="mx-40 mt-12">
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
