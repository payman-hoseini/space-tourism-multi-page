'use client'
import { useRef, useState } from "react";
import { PageFile } from "./shared/contracts";


export default function TechHero({ File } : {File : PageFile}){
    const btnLaunch = useRef(null)
    const btnPort = useRef(null)
    const btnCapsule = useRef(null)
    let [ techValue , setTechValue ] = useState(File.technology[0])
    function techSelector(e : React.MouseEvent<HTMLButtonElement, MouseEvent>){
        if(e.target == btnLaunch.current){
            setTechValue(File.technology[0])
        }
        else if(e.target == btnPort.current){
            setTechValue(File.technology[1])
        }
        else{
            setTechValue(File.technology[2])
        }
    }
    return (
        <div className="mt-6 ml-40 h-[65%] grid grid-cols-2  gap-x-8">
            <div className="flex items-center">
                    <div className="space-y-10 mr-16">
                        <button ref={btnLaunch} onClick={techSelector} className={`w-[80px] h-[80px] rounded-full text-white font-Bellefair text-[32px] border border-white/20 duration-700 hover:border-white ${techValue.name == "Launch vehicle" ? "bg-white text-black" : ""}`}>1</button>
                        <button ref={btnPort} onClick={techSelector} className={`w-[80px] h-[80px] rounded-full text-white font-Bellefair text-[32px] border border-white/20 duration-700 hover:border-white ${techValue.name == "Spaceport" ? "bg-white text-black" : ""}`}>2</button>
                        <button ref={btnCapsule} onClick={techSelector} className={`w-[80px] h-[80px] rounded-full text-white font-Bellefair text-[32px] border border-white/20 duration-700 hover:border-white ${techValue.name == "Space capsule" ? "bg-white text-black" : ""}`}>3</button>
                </div>
                <div>
                    <h2 className="font-Bellefair text-[32px] text-white/50">THE TERMINOLOGY...</h2>
                    <h2 className="mt-4 mb-6 font-Bellefair text-white text-[56px]">{techValue.name.toUpperCase()}</h2>
                    <p className="text-Blue-300 font-Barlow  leading-[1.8] text-lg">{techValue.description}</p>
                </div>
            </div>
            <div className="flex justify-end">
                <img src={techValue.images.portrait} alt={techValue.name} className="object-contain w-full h-full"/>
            </div>
        </div>
    )
}