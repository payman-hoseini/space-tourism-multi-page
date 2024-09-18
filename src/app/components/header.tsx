
import TransitionLink from "./shared/transitionLink";


export default function Header(){

    return (
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
            <button className="md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>
            </button>
        </div>
    )
}