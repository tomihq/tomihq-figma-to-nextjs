import type { NextPage } from 'next'
import Link from 'next/link'
const HomePage: NextPage = () => {

    return (
      <section className="max-w-6xl max-h-screen h-[440px]  mx-auto flex-1 px-8 flex flex-col justify-center  items-center   mt-24 md:gap-12 md:mt-[18vh] md:px-0    ">
         <div className="flex flex-col md:w-[500px] gap-6 mb-8 md:mb-0">
            <h1 className="font-bold text-5xl leading-[56px]">Figma to React Apps</h1>
            <h2 className="font-light text-[21px] leading-8 text-[#7D7987] ">Designs made in Figma to React / TailwindCSS apps. <br/> Increase your frontend skills replicating this. </h2>
            <Link href="/landings"><button className="md:self-start bg-black rounded-full w-52 h-14 text-white font-bold text-lg">See templates </button></Link>
         </div>

         <div>Made with 🖤 using NextJS, Tailwind and TypeScript by <Link href="https://twitter.com/ttomihq" target={'_blank'} prefetch={true}> <strong>@ttomihq</strong></Link></div>
        
      </section>
  )
}

export default HomePage