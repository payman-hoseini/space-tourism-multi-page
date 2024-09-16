'use client'
import {  useRef, useState } from "react";
import { PageFile } from "./shared/contracts";


export default function DesHero({ File } : {File : PageFile}){
    const btnMoonRef = useRef(null)
    const btnMarsRef = useRef(null)
    const btnEurRef = useRef(null)
    const btnTitanRef = useRef(null)
    let [ desValue , setDesValue ] = useState(File.destinations[0])
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
        <div className="mx-40 mb-12 h-[70%]">
            <div className="grid grid-cols-2 gap-x-8 h-full  place-content-center">
                <div>
                    <img src={desValue.images.png} alt={desValue.name}/>
                </div>
                <div>
                    <div className="flex">
                        <button ref={btnMoonRef} onClick={destSelector} className={`text-white font-Barlow-Condensed tracking-[2px] pb-2 mr-8 border-b-4 border-b-transparent hover:border-b-white/45 duration-700 ${desValue.name == 'Moon' ? "border-b-white" : ""}`}>MOON</button>
                        <button ref={btnMarsRef} onClick={destSelector} className={`text-white font-Barlow-Condensed tracking-[2px] pb-2 mr-8 border-b-4 border-b-transparent hover:border-b-white/45 duration-700 ${desValue.name == 'Mars' ? "border-b-white" : ""}`}>MARS</button>
                        <button ref={btnEurRef} onClick={destSelector} className={`text-white font-Barlow-Condensed tracking-[2px] pb-2 mr-8 border-b-4 border-b-transparent hover:border-b-white/45 duration-700 ${desValue.name == 'Europa' ? "border-b-white" : ""}`}>EUROPA</button>
                        <button ref={btnTitanRef} onClick={destSelector} className={`text-white font-Barlow-Condensed tracking-[2px] pb-2 border-b-4 border-b-transparent hover:border-b-white/45 duration-700 ${desValue.name == 'Titan' ? "border-b-white" : ""}`}>TITAN</button>
                    </div>
                    <div>
                        <div className="py-10 border-b border-b-white/30 w-[80%]">
                            <h2 className="text-[100px] leading-normal font-Bellefair text-white">{desValue.name.toUpperCase()}</h2>
                            <p className="text-lg text-Blue-300 font-Barlow text-balance leading-[1.8]">{desValue.description}</p>
                        </div>
                        <div className="mt-10 flex w-full space-x-6">
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