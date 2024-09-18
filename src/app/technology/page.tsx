import Header from "../components/header";
import { promises as fs } from 'fs';
import { PageFile } from "../components/shared/contracts";
import TechHero from "../components/techHero";

export default async function Crew(){
    const file = await fs.readFile(process.cwd() + '/src/data.json' , 'utf8');
    const File : PageFile = JSON.parse(file)
    return (
        <>
            <div className="h-screen bg-Blue-900">
                <div className="techBackground h-screen mx-auto max-w-[1440px] transitionPage">
                    <Header />
                    <div className="lg:ml-40 md:ml-10 md: mt-12">
                        <div className="flex items-center">
                            <span className="font-Barlow-Condensed text-white/20 font-bold text-[28px] tracking-[4.72px]">03</span>
                            <h2 className="font-Barlow-Condensed text-[28px] tracking-[4px] text-white ml-6">SPACE LAUNCH 101</h2>
                        </div>
                    </div>
                    <TechHero File={File} />
            </div>
        </div>
    </>
    )
    
}