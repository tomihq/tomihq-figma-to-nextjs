import { ArrowDown, Divider, FourSectionLogo } from "../UI"


export const MobileAppsSection = () => {
  return (
    <section className="max-w-6xl mx-auto flex flex-col md:flex-row sm:w-[460px] md:w-full  px-8 md:px-12 xl:px-0  justify-center items-start md:mb-56 mb-36">
        <div className="flex flex-col   md:w-[460px]  gap-6 md:mr-12 xl:mr-0">
            <h1 className="font-bold text-5xl leading-[56px]">Download our mobile apps</h1>
            <Divider/>
            <h2 className="font-light text-[21px] leading-8 text-[#7D7987] ">Our dedicated patient engagement app and 
            web portal allow you to access information instantaneously (no tedeous form, long calls, 
            or administrative hassle) and securely</h2>
            <button className='flex justify-center items-center w-52 h-14 text-[#458FF6] font-bold text-lg leading-[60px] border-2 border-[#458FF6] rounded-full '> Download <div className="ml-4"><ArrowDown/></div> </button>
        </div>
        <div className=" flex items-center justify-center mt-16  xl:-mt-[3rem] ">
            <FourSectionLogo/>
        </div>
    </section>
  )
}
