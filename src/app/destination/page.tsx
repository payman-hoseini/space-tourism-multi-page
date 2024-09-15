import Image from "next/image";
import Header from "../components/header";
import { promises as fs } from 'fs';
import { PageFile } from "../components/contracts";
import { json } from "stream/consumers";

export default async function Destination() {
    const file = await fs.readFile(process.cwd() + '/src/data.json' , 'utf8');
    const File : PageFile = JSON.parse(file)
    console.log(File.destinations)
  return (
    <>
      <div className="h-screen bg-Blue-900">
        <div className="destinationBackground h-screen mx-auto max-w-[1440px] relative">
            <Header />
            <div>
                <div className="flex items-center">
                    <span className="font-Barlow-Condensed text-white/20 font-bold text-[28px] tracking-[4.72px]">01</span>
                    <h2 className="font-Barlow-Condensed text-[28px] tracking-[4px] text-white ml-6">PICK YOUR DESTINATION</h2>
                </div>
                <div>
                    <div>
                        {/* <img src={} alt="moon"/> */}
                    </div>
                    <div>
                        <div>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>
                        <div>
                            <div>
                                <h2>MOON</h2>
                                <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back
                                refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                            </div>
                            <div>
                                <div>
                                    <p>AVG. DISTANCE</p>
                                    <p>384,400 KM</p>
                                </div>
                                <div>
                                    <p>Est. travel time</p>
                                    <p>3 DAYS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
