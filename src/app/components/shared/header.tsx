'use client'
import { useEffect, useRef, useState } from "react";
import TransitionLink from "./transitionLink";


export default function Header(){
  const [show , setShow] = useState(false)
  function showModalMenu(){
    show ? setShow(false) : setShow(true)
  }
  useEffect(() => {
    if(show){
        document.addEventListener('mousedown' , handleClickOutside)
    }
    return () => {
        document.addEventListener('mousedown' , handleClickOutside)
    }
  },[show])

  const menuRef = useRef(null)
  const handleClickOutside = (event : MouseEvent) => {
      if (menuRef.current == event.target) {
          setShow(false)
      }
  }
    return (
        <>
          <div className="flex justify-between items-center pt-10 md:pl-16 mx-8 md:mx-0">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
            </div>
            <div className="lg:w-[560px] lg:inline-block hidden h-[1px] bg-white bg-opacity-25 ml-16 -mr-8 z-10"></div>
            <div className="bg-transparent/[0.05] md:block hidden">
                <div className="text-white h-24  lg:w-[736px] md:w-[640px] flex items-center justify-end px-16 headerb">
                    <TransitionLink className="mr-12 flex items-center h-full border-b-[3px] border-b-transparent  hover:border-b-white/45 duration-700" href="/">
                      <>
                        <span className="font-Barlow-Condensed font-semibold tracking-[2.7px] mr-[7px]">00</span> <span className="font-Barlow-Condensed tracking-[2px]">HOME</span>
                      </>
                    </TransitionLink>
                    <TransitionLink className="mr-12 flex items-center h-full border-b-[3px] border-b-transparent  hover:border-b-white/45 duration-700" href="/destination">
                      <>
                        <span className="font-Barlow-Condensed font-semibold tracking-[2.7px] mr-[7px]">01</span> <span className="font-Barlow-Condensed tracking-[2px]">DESTINATION</span>
                      </>
                    </TransitionLink>
                    <TransitionLink className="mr-12 flex items-center h-full border-b-[3px] border-b-transparent  hover:border-b-white/45 duration-700" href="/crew">
                      <>
                        <span className="font-Barlow-Condensed font-semibold tracking-[2.7px] mr-[7px]">02</span> <span className="font-Barlow-Condensed tracking-[2px]">CREW</span>
                      </>
                    </TransitionLink>
                    <TransitionLink className="flex items-center h-full border-b-[3px] border-b-transparent  hover:border-b-white/45 duration-700" href="/technology">
                      <>
                        <span className="font-Barlow-Condensed font-semibold tracking-[2.7px] mr-[7px]">03</span> <span className="font-Barlow-Condensed tracking-[2px]">TECHNOLOGY</span>
                      </>
                    </TransitionLink>
                </div>
            </div>
            <button onClick={showModalMenu} className="md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>
            </button>
        </div>
        {show && <div ref={menuRef} className="fixed  top-0 left-0 h-screen w-full z-10 bg-transparent">
            <div className=" headerb w-2/3 h-full absolute right-0">
                <button onClick={showModalMenu} className="absolute right-0 p-8">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg>
                </button>
                <ul className="text-white mt-28 pl-8">
                  <li>
                    <TransitionLink className="mb-8 border-r  hover:border-r-white/45 duration-700 flex items-center" href="/">
                      <>
                        <span className="font-Barlow-Condensed font-semibold tracking-[2.7px] mr-[7px]">00</span> <span className="font-Barlow-Condensed tracking-[2px]">HOME</span>
                      </>
                    </TransitionLink>
                  </li>
                  <li>
                    <TransitionLink className="mb-8 border-r  hover:border-r-white/45 duration-700 flex items-center" href="/destination">
                      <>
                        <span className="font-Barlow-Condensed font-semibold tracking-[2.7px] mr-[7px]">01</span> <span className="font-Barlow-Condensed tracking-[2px]">DESTINATION</span>
                      </>
                    </TransitionLink>
                  </li>
                  <li>
                    <TransitionLink className="mb-8 border-r  hover:border-r-white/45 duration-700 flex items-center" href="/crew">
                      <>
                        <span className="font-Barlow-Condensed font-semibold tracking-[2.7px] mr-[7px]">02</span> <span className="font-Barlow-Condensed tracking-[2px]">CREW</span>
                      </>
                    </TransitionLink>
                  </li>
                  <li>
                    <TransitionLink className="border-r  hover:border-r-white/45 duration-700 flex items-center" href="/technology">
                      <>
                        <span className="font-Barlow-Condensed font-semibold tracking-[2.7px] mr-[7px]">03</span> <span className="font-Barlow-Condensed tracking-[2px]">TECHNOLOGY</span>
                      </>
                    </TransitionLink>
                  </li>
                </ul>
            </div>
        </div>}
        </>
    )
}