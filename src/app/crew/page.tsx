import Header from "../components/header";
import { promises as fs } from 'fs';
import { PageFile } from "../components/shared/contracts";
import CrewHero from "../components/crewHero";

export default async function Crew(){
    const file = await fs.readFile(process.cwd() + '/src/data.json' , 'utf8');
    const File : PageFile = JSON.parse(file)
    return (
        <>
            <div className="h-screen bg-Blue-900">
                <div className="crewBackground h-screen mx-auto max-w-[1440px]">
                    <Header />
                    <div className="mx-40 mt-12">
                        <div className="flex items-center">
                            <span className="font-Barlow-Condensed text-white/20 font-bold text-[28px] tracking-[4.72px]">02</span>
                            <h2 className="font-Barlow-Condensed text-[28px] tracking-[4px] text-white ml-6">MEET YOUR CREW</h2>
                        </div>
                    </div>
                    <CrewHero File={File} />
            </div>
        </div>
    </>
    )
    
}