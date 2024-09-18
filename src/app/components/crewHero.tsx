'use client'
import { useRef, useState } from "react";
import { PageFile } from "./shared/contracts";


export default function CrewHero({ File } : {File : PageFile}){
    const btnDoug = useRef(null)
    const btnMark = useRef(null)
    const btnVic = useRef(null)
    const btnAno = useRef(null)
    let [ crewValue , setCrewValue ] = useState(File.crew[0])

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
        <div className="mx-40 mt-6 h-[65%] mb-12 grid grid-cols-2 place-items-center gap-x-8">
            <div className="flex-col flex justify-between  h-full">
                <div className="h-full flex flex-col justify-center">
                    <h2 className="font-Bellefair text-[32px] text-white/50">{crewValue.role.toUpperCase()}</h2>
                    <h2 className="mt-4 mb-6 font-Bellefair text-white text-[56px]">{crewValue.name.toUpperCase()}</h2>
                    <p className="text-Blue-300 font-Barlow text-balance leading-[1.8] text-lg">{crewValue.bio}</p>
                </div>
                <div className="mt-10 flex space-x-10">
                    <button ref={btnDoug} onClick={crewSelector} className={`w-[15px] h-[15px]  hover:bg-white/80 duration-500 rounded-full ${crewValue.name == "Douglas Hurley" ? "bg-white/100" : "bg-white/50"}`}></button>
                    <button ref={btnMark} onClick={crewSelector} className={`w-[15px] h-[15px]  hover:bg-white/80 duration-500 rounded-full ${crewValue.name == "Mark Shuttleworth" ? "bg-white/100" : "bg-white/50"}`}></button>
                    <button ref={btnVic} onClick={crewSelector} className={`w-[15px] h-[15px]  hover:bg-white/80 duration-500 rounded-full ${crewValue.name == "Victor Glover" ? "bg-white/100" : "bg-white/50"}`}></button>
                    <button ref={btnAno} onClick={crewSelector} className={`w-[15px] h-[15px] hover:bg-white/80 duration-500 rounded-full ${crewValue.name == "Anousheh Ansari" ? "bg-white/100" : "bg-white/50"}`}></button>
                </div>
            </div>
            <div>
                <img src={crewValue.images.png} alt={crewValue.name}/>
            </div>
        </div>
    )
}