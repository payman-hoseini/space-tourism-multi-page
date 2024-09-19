'use client'
import { useRef, useState } from "react";
import { PageFile } from "./shared/contracts";


export default function CrewHero({ File } : {File : PageFile}){
    const btnDoug = useRef(null)
    const btnMark = useRef(null)
    const btnVic = useRef(null)
    const btnAno = useRef(null)
    const [ crewValue , setCrewValue ] = useState(File.crew[0])

    function crewSelector(e : React.MouseEvent<HTMLButtonElement, MouseEvent>){
        if(e.target == btnDoug.current){
            setCrewValue(File.crew[0])
        }
        else if(e.target == btnMark.current){
            setCrewValue(File.crew[1])
        }
        else if(e.target == btnVic.current){
            setCrewValue(File.crew[2])
        }
        else {
            setCrewValue(File.crew[3])
        }
    }
    return (
        <div className="lg:mx-40 md:mx-10 mx-6 mt-6 h-[65%] mb-12 grid lg:grid-cols-2 place-items-end gap-x-8">
            <div className="flex-col md:px-20 lg:px-0 justify-between items-center lg:items-start flex h-full">
                <div className="h-full flex flex-col justify-center text-center lg:text-start">
                    <h2 className="font-Bellefair lg:text-[32px] md:text-2xl text-lg text-white/50">{crewValue.role.toUpperCase()}</h2>
                    <h2 className="md:mt-4 mt-2 mb-6 font-Bellefair text-white lg:text-[56px] md:text-[40px] text-2xl">{crewValue.name.toUpperCase()}</h2>
                    <p className="text-Blue-300 font-Barlow lg:text-balance leading-[1.8] lg:text-lg md:text-base text-[15px]">{crewValue.bio}</p>
                </div>
                <div className="lg:mt-10 mt-6 flex lg:space-x-10 space-x-5">
                    <button ref={btnDoug} onClick={crewSelector} className={`lg:w-[15px] lg:h-[15px] w-[10px] h-[10px]  hover:bg-white/80 duration-500 rounded-full ${crewValue.name == "Douglas Hurley" ? "bg-white/100" : "bg-white/50"}`}></button>
                    <button ref={btnMark} onClick={crewSelector} className={`lg:w-[15px] lg:h-[15px] w-[10px] h-[10px]  hover:bg-white/80 duration-500 rounded-full ${crewValue.name == "Mark Shuttleworth" ? "bg-white/100" : "bg-white/50"}`}></button>
                    <button ref={btnVic} onClick={crewSelector} className={`lg:w-[15px] lg:h-[15px] w-[10px] h-[10px]  hover:bg-white/80 duration-500 rounded-full ${crewValue.name == "Victor Glover" ? "bg-white/100" : "bg-white/50"}`}></button>
                    <button ref={btnAno} onClick={crewSelector} className={`lg:w-[15px] lg:h-[15px] w-[10px] h-[10px] hover:bg-white/80 duration-500 rounded-full ${crewValue.name == "Anousheh Ansari" ? "bg-white/100" : "bg-white/50"}`}></button>
                </div>
            </div>
            <div className="mt-8 lg:mt-0">
                <img src={crewValue.images.png} alt={crewValue.name} className="w-[95%]"/>
            </div>
        </div>
    )
}