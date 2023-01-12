import Link from "next/link"
import { Card } from "../components/Landing1"

const TEMPLATES = [

    {img: {alt: 'Doctor', src: '/img/Landing1/LastArticlesSection/lastarticle-2.webp'}, title: "Health Care", description: "Template about health care. Check it out!", "link": "/landings/1"},
    

] 


const TemplatesPage = () => {
  return (
    <section className="max-w-6xl max-h-screen h-[440px]  items-center mx-auto flex-1 mt-8 px-6 flex flex-col  md:gap-4 md:mt-[8vh] md:px-0    ">
        <div className="flex flex-col md:w-[500px] gap-6 mb-8 md:mb-0 self-start">
            <h1 className="font-bold text-5xl leading-[56px]">Figma to React Apps</h1>
            <h2 className="font-light text-[21px] leading-8 text-[#7D7987] ">Designs made in Figma to React / TailwindCSS apps. <br/> Increase your frontend skills replicating this. </h2>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-8'>
        {
            TEMPLATES.map((template) => <Card 
              key={template.title}  
              data={template} 
              readMoreBtn={true} 
              padding={"py-9 px-2"} 
              imgPriority={true}
            />)
        }
          
        </div>

        <div>Made with 🖤 using NextJS, Tailwind and TypeScript by <Link href="https://twitter.com/ttomihq" target={'_blank'} prefetch={true}> <strong>@ttomihq</strong></Link></div>
   
    </section>
  )
}

export default TemplatesPage