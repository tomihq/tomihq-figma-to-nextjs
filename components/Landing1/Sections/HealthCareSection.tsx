import { Divider, ThirdSectionLogo } from "../UI"

const HealthCareSection = () => {
  return (
    <section className="max-w-6xl mx-auto flex flex-col-reverse sm:w-[460px] md:w-full md:flex-row px-8 md:px-12 xl:px-0 justify-between  md:mb-56 mb-36">
        <div className=" flex items-center justify-center mt-16 md:-mt-[3rem] md:px-12 ">
         <ThirdSectionLogo/>
        </div>
        <div className="flex flex-col md:w-[460px] gap-8 md:ml-12 xl:ml-0">
          <h1 className="font-bold text-5xl leading-[56px]">Leading healthcare providers</h1>
          <Divider/>
          <h2 className="font-light text-[21px] leading-8 text-[#7D7987] ">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
in the solutions we deliver</h2>
          <button className='flex justify-center items-center w-52 h-14 text-[#458FF6] font-bold text-lg leading-[60px] border-2 border-[#458FF6] rounded-full '> Learn more </button>
        </div>
    </section>
  )
}

export default HealthCareSection
