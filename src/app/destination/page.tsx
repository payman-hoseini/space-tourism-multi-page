import Image from "next/image";
import Header from "../components/header";
import { promises as fs } from 'fs';
import { PageFile } from "../components/contracts";
import { json } from "stream/consumers";

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
            <div className="mx-40 mb-12 h-[70%]">
                <div className="grid grid-cols-2 gap-x-8 h-full  place-content-center">
                    <div>
                        <img src={File.destinations[0].images.png} alt="moon"/>
                    </div>
                    <div>
                        <div className="flex">
                            <button className="text-white font-Barlow-Condensed tracking-[2px] pb-2 mr-8 border-b-4 border-b-transparent hover:border-b-white/45 duration-700">MOON</button>
                            <button className="text-white font-Barlow-Condensed tracking-[2px] pb-2 mr-8 border-b-4 border-b-transparent hover:border-b-white/45 duration-700">MARS</button>
                            <button className="text-white font-Barlow-Condensed tracking-[2px] pb-2 mr-8 border-b-4 border-b-transparent hover:border-b-white/45 duration-700">EUROPA</button>
                            <button className="text-white font-Barlow-Condensed tracking-[2px] pb-2 border-b-4 border-b-transparent hover:border-b-white/45 duration-700">TITAN</button>
                        </div>
                        <div>
                            <div className="py-10 border-b border-b-white/30 w-[80%]">
                                <h2 className="text-[100px] leading-normal font-Bellefair text-white">MOON</h2>
                                <p className="text-lg text-Blue-300 font-Barlow text-balance leading-[1.8]">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back
                                refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                            </div>
                            <div className="mt-10 flex w-full space-x-6">
                                <div className="basis-1/2">
                                    <p className="font-Barlow-Condensed text-sm tracking-[2px] text-Blue-300">AVG. DISTANCE</p>
                                    <p className="mt-3 text-white font-Bellefair lead text-[28px]">384,400 KM</p>
                                </div>
                                <div className="basis-1/2">
                                    <p className="font-Barlow-Condensed text-sm tracking-[2px] text-Blue-300">EST. TRAVEL TIME</p>
                                    <p className="mt-3 text-white font-Bellefair lead text-[28px]">3 DAYS</p>
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
