

export default function Hero(){
    return (
        <div className="absolute top-[40%] grid grid-cols-2 items-center mx-40 my-32 ">
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
    )
}