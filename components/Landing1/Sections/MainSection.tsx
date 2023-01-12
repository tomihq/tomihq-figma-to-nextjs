import { MainSectionLogo } from "../UI/assets/MainSectionLogo"

export const MainSection = () => {
  return (
    <section className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center px-8 md:px-12 xl:px-0 items-center md:items-start py-14 gap-8 md:gap-0 md:mt-12 md:mb-56 mb-36">
       <div className="flex flex-col lg:w-[460px] gap-6 md:mr-12 xl:mr-0">
        <h1 className="font-bold text-5xl leading-[56px]">Virtual healthcare for you</h1>
        <h2 className="font-light text-[21px] leading-8 text-[#7D7987] ">Trafalgar provides progressive, and affordable 
            healthcare, accessible on mobile and online 
            for everyone</h2>
            <button className="self-start bg-[#458FF6] rounded-full w-52 h-14 text-white font-bold text-lg">Consult today</button>
       </div>
       <div className=" flex items-center justify-center  xl:-mt-[6rem] z-50 md:px-12 ">
            <MainSectionLogo/>
       </div>
    </section>
  )
}
