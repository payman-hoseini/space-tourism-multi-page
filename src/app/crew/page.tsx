import Header from "../components/shared/header";
import { promises as fs } from 'fs';
import { PageFile } from "../components/shared/contracts";
import CrewHero from "../components/crewHero";

export default async function Crew(){
    const file = await fs.readFile(process.cwd() + '/src/data.json' , 'utf8');
    const File : PageFile = JSON.parse(file)
    return (
        <>
            <div className="h-screen bg-Blue-900">
                <div className="crewBackground h-[130vh] md:h-screen mx-auto max-w-[1440px] transitionPage">
                    <Header />
                    <div className="lg:mx-40 md:mx-10 mx-6 lg:mt-12 md:mt-10 mt-6">
                        <div className="flex items-center justify-center md:justify-start">
                            <span className="font-Barlow-Condensed text-white/20 font-bold md:text-[28px] text-base tracking-[4.72px]">02</span>
                            <h2 className="font-Barlow-Condensed md:text-[28px] text-base tracking-[4px] text-white ml-6">MEET YOUR CREW</h2>
                        </div>
                    </div>
                    <CrewHero File={File} />
                </div>
            </div>
        </>
    )
    
}