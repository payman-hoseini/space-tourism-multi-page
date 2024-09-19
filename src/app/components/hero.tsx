import TransitionLink from "./shared/transitionLink";


export default function Hero(){
    return (
        <div className="absolute lg:top-[30%] grid grid-cols-1 lg:place-items-end md:place-items-center lg:grid-cols-2 items-center md:mx-10 lg:mx-40 my-32 ">
            <div className="text-center lg:text-start">
                <h2 className="text-Blue-300 font-Barlow-Condensed md:text-[28px] text-base leading-[.336] tracking-[4px]">SO, YOU WANT TO TRAVEL TO</h2>
                <h2 className="font-Bellefair md:text-[144px] text-[80px] leading-normal text-white my-6">SPACE</h2>
                <p className="text-Blue-300 font-Barlow leading-[1.8] md:text-lg text-[15px] text-balance">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover
                    kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
            <div className="md:text-right text-center">
                <TransitionLink href="/destination" className="inline-block align-middle px-20 py-20 text-Blue-900  rounded-full font-Bellefair md:text-[32px] text-lg duration-500 hover:bg-white/10 hover:text-Blue-900/50">
                    <p className="md:w-[272px] md:h-[272px] w-[144px] h-[144px] bg-white rounded-full grid text-center items-center">EXPLORE</p>
                </TransitionLink>
            </div>
        </div>
    )
}