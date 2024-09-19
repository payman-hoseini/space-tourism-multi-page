'use client'
import { useEffect, useRef, useState } from "react";
import { PageFile } from "./shared/contracts";


export default function TechHero({ File } : {File : PageFile}){
    const btnLaunch = useRef(null)
    const btnPort = useRef(null)
    const btnCapsule = useRef(null)
    const [ techValue , setTechValue ] = useState(File.technology[0])
    const [ win , setWin] = useState(0)
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
    useEffect(()=> {
        setWin(window.innerWidth);
        function handleResize(){
            setWin(window.innerWidth)
        }
        window.addEventListener("resize" , handleResize);
        return () => {
            window.removeEventListener("resize" , handleResize);
        }
    },[])
    return (
        <div className="lg:mt-6 mt-16 lg:ml-40  h-[65%] grid lg:grid-cols-2  lg:gap-x-8">
            <div className="flex lg:flex-row flex-col md:mx-10 lg:mx-0 order-last lg:order-first items-center">
                <div className="lg:space-y-10 lg:space-x-0 md:space-x-10 space-x-5 mt-8 lg:mr-16">
                    <button ref={btnLaunch} onClick={techSelector} className={`lg:w-[80px] lg:h-[80px] md:w-[56px] md:h-[56px] w-[40px] h-[40px] rounded-full  font-Bellefair lg:text-[32px] md:text-2xl border border-white/20 duration-700 hover:border-white ${techValue.name == "Launch vehicle" ? "bg-white text-Blue-900" : "text-white"}`}>1</button>
                    <button ref={btnPort} onClick={techSelector} className={`lg:w-[80px] lg:h-[80px] md:w-[56px] md:h-[56px] w-[40px] h-[40px] rounded-full  font-Bellefair lg:text-[32px] md:text-2xl border border-white/20 duration-700 hover:border-white ${techValue.name == "Spaceport" ? "bg-white text-Blue-900" : "text-white"}`}>2</button>
                    <button ref={btnCapsule} onClick={techSelector} className={`lg:w-[80px] lg:h-[80px] md:w-[56px] md:h-[56px] w-[40px] h-[40px] rounded-full  font-Bellefair lg:text-[32px] md:text-2xl border border-white/20 duration-700 hover:border-white ${techValue.name == "Space capsule" ? "bg-white text-Blue-900" : "text-white"}`}>3</button>
                </div>
                <div className="mt-10 lg:mt-0 text-center lg:text-start">
                    <h2 className="font-Bellefair lg:text-[32px] md:text-2xl text-lg text-white/50">THE TERMINOLOGY...</h2>
                    <h2 className="mt-4 lg:mb-6 mb-4 font-Bellefair text-white lg:text-[56px] md:text-[40px] text-2xl">{techValue.name.toUpperCase()}</h2>
                    <p className="text-Blue-300 font-Barlow leading-[1.8] lg:text-lg md:text-base text-[15px] text-balance">{techValue.description}</p>
                </div>
            </div>
            <div className="flex justify-end">
                <img src={(win <=768) ? techValue.images.landscape : techValue.images.portrait} alt={techValue.name} className="object-contain w-full h-full"/>
            </div>
        </div>
    )
}