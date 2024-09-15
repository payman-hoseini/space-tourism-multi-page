import Link from "next/link";


export default function Home() {
  return (
    <>
      <div className="h-screen bg-Blue-900">
          <div className="homeBackground h-screen mx-auto max-w-[1440px] relative">
              <div className="flex  items-center pt-10 pl-16">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
                </div>
                <div className="w-[560px] h-[1px] bg-white bg-opacity-25 ml-16 -mr-8 z-10"></div>
                <div className="bg-transparent/[0.05]">
                  <div className="text-white h-24  w-[736px] flex items-center justify-end px-16 headerb">
                    <Link className="mr-12 flex items-center h-full border-b-[3px] border-b-transparent  hover:border-b-white/45 duration-700" href="/">
                      <span className="font-Barlow-Condensed font-semibold tracking-[2.7px] mr-[7px]">00</span> <span className="font-Barlow-Condensed tracking-[2px]">HOME</span>
                    </Link>
                    <Link className="mr-12 flex items-center h-full border-b-[3px] border-b-transparent  hover:border-b-white/45 duration-700" href="/destination">
                      <span className="font-Barlow-Condensed font-semibold tracking-[2.7px] mr-[7px]">01</span> <span className="font-Barlow-Condensed tracking-[2px]">DESTINATION</span>
                    </Link>
                    <Link className="mr-12 flex items-center h-full border-b-[3px] border-b-transparent  hover:border-b-white/45 duration-700" href="/crew">
                      <span className="font-Barlow-Condensed font-semibold tracking-[2.7px] mr-[7px]">02</span> <span className="font-Barlow-Condensed tracking-[2px]">CREW</span>
                    </Link>
                    <Link className="flex items-center h-full border-b-[3px] border-b-transparent  hover:border-b-white/45 duration-700" href="/technology">
                      <span className="font-Barlow-Condensed font-semibold tracking-[2.7px] mr-[7px]">03</span> <span className="font-Barlow-Condensed tracking-[2px]">TECHNOLOGY</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute top-[40%] grid grid-cols-2   items-center mx-40 my-32 ">
                <div>
                  <h2 className="text-Blue-300 font-Barlow-Condensed text-[28px] leading-[.336] tracking-[4px]">SO, YOU WANT TO TRAVEL TO</h2>
                  <h2 className="font-Bellefair text-[144px] leading-normal text-white my-6">SPACE</h2>
                  <p className="text-Blue-300 font-Barlow leading-[1.8] text-lg text-balance">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover
                     kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <div className="text-right">
                  <button className="align-middle px-20 py-20 text-Blue-900  rounded-full font-Bellefair text-[32px] duration-500 hover:bg-white/10 hover:text-Blue-900/50">
                    <p className="w-[272px] h-[272px] bg-white rounded-full grid  items-center">EXPLORE</p>
                  </button>
                </div>
              </div>
          </div>
      </div>
    </>
  );
}
