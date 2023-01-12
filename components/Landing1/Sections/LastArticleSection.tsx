import { Card, Divider, WaterDrop } from "../UI"
import { DotsSection } from "./DotsSection"

interface IArticle {
    img: string;
    title: string;
    description: string;
  }

 const LAST_ARTICLES = [
    {img: {alt: 'Doctor drawing blood from a patient', src: '/img/Landing1/LastArticlesSection/lastarticle-1.webp'}, title:"Disease detection, check up in the laboratory", description: "In this case, the role of the health laboratory is very important to do a disease detection..."},
    
    {img: {alt: 'Doctor studying a plant', src: '/img/Landing1/LastArticlesSection/lastarticle-2.webp'}, title: "Herbal medicines that are safe for consumption", description: "Herbal medicine is very widely used at this time because of its very good for your health..."},
    
    {img: {alt: 'woman doing skin-care', src: '/img/Landing1/LastArticlesSection/lastarticle-3.webp'}, title: "Natural care for healthy facial skin", description: "A healthy lifestyle should start from now and also for your skin health. There are some..."}, 
] 


const LastArticleSection = () => {
  return (
    <section className='max-w-6xl mx-auto flex flex-col gap-4 items-center  relative z-50 md:mb-32 mb-36 '>
        <DotsSection classes={"self-start absolute top-12 -left-8"} />
        <h3 className='font-bold text-3xl leading-[56px] px-8 md:px-12 xl:px-0'>Check out our latest articles</h3>
        <Divider/>
      
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-8'>
        {
            LAST_ARTICLES.map((article) => <Card key={article.title}  data={article} readMoreBtn={true} />)
        }
          
        </div>

        <button className='flex justify-center items-center w-52 h-14 text-[#458FF6] font-bold text-lg leading-[60px] border-2 border-[#458FF6] rounded-full'> View all </button>
        
    </section>
  )
}

export default LastArticleSection