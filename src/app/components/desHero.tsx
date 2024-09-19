'use client'
import {  useRef, useState } from "react";
import { PageFile } from "./shared/contracts";


export default function DesHero({ File } : {File : PageFile}){
    const btnMoonRef = useRef(null)
    const btnMarsRef = useRef(null)
    const btnEurRef = useRef(null)
    const btnTitanRef = useRef(null)
    const[ desValue , setDesValue ] = useState(File.destinations[0])
    function destSelector(e : React.MouseEvent<HTMLButtonElement, MouseEvent>){
        if(e.target == btnMoonRef.current){
            setDesValue(File.destinations[0])
        }
        else if(e.target == btnMarsRef.current) {
            setDesValue(File.destinations[1])
        }
        else if(e.target == btnEurRef.current) {
            setDesValue(File.destinations[2])
        }
        else {
            setDesValue(File.destinations[3])
        }
        
    }
    return (
        <div className="md:mx-40 mx-6 mt-6 lg:mb-12 md:mb-10 h-[70%]">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:h-full  place-content-center place-items-center md:place-items-stretch">
                <div className="md:my-5 w-1/2 md:w-full">
                    <img src={desValue.images.png} alt={desValue.name}/>
                </div>
                <div className="mt-8 lg:mt-0 flex flex-col items-center lg:block">
                    <div className="flex">
                        <button ref={btnMoonRef} onClick={destSelector} className={`text-white md:text-base text-[14px] font-Barlow-Condensed tracking-[2px] pb-2 mr-8 border-b-4 border-b-transparent hover:border-b-white/45 duration-700 ${desValue.name == 'Moon' ? "border-b-white" : ""}`}>MOON</button>
                        <button ref={btnMarsRef} onClick={destSelector} className={`text-white md:text-base text-[14px] font-Barlow-Condensed tracking-[2px] pb-2 mr-8 border-b-4 border-b-transparent hover:border-b-white/45 duration-700 ${desValue.name == 'Mars' ? "border-b-white" : ""}`}>MARS</button>
                        <button ref={btnEurRef} onClick={destSelector} className={`text-white md:text-base text-[14px] font-Barlow-Condensed tracking-[2px] pb-2 mr-8 border-b-4 border-b-transparent hover:border-b-white/45 duration-700 ${desValue.name == 'Europa' ? "border-b-white" : ""}`}>EUROPA</button>
                        <button ref={btnTitanRef} onClick={destSelector} className={`text-white md:text-base text-[14px] font-Barlow-Condensed tracking-[2px] pb-2 border-b-4 border-b-transparent hover:border-b-white/45 duration-700 ${desValue.name == 'Titan' ? "border-b-white" : ""}`}>TITAN</button>
                    </div>
                    <div className="text-center lg:text-start">
                        <div className="lg:py-10 py-6 border-b border-b-white/30 lg:w-[80%]">
                            <h2 className="lg:text-[100px] md:text-[80px] text-[56px] leading-normal font-Bellefair text-white">{desValue.name.toUpperCase()}</h2>
                            <p className="md:text-lg text-base text-Blue-300 font-Barlow text-balance leading-[1.8]">{desValue.description}</p>
                        </div>
                        <div className="lg:mt-10 mt-6 flex md:flex-row flex-col w-full md:space-x-6 space-y-6 md:space-y-0">
                            <div className="basis-1/2">
                                <p className="font-Barlow-Condensed text-sm tracking-[2px] text-Blue-300">AVG. DISTANCE</p>
                                <p className="mt-3 text-white font-Bellefair lead text-[28px]">{desValue.distance.toUpperCase()}</p>
                            </div>
                            <div className="basis-1/2">
                                <p className="font-Barlow-Condensed text-sm tracking-[2px] text-Blue-300">EST. TRAVEL TIME</p>
                                <p className="mt-3 text-white font-Bellefair lead text-[28px]">{desValue.travel.toUpperCase()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}