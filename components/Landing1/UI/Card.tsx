import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "./assets";

interface ICardProps {
  data: {
    LOGO?: any;
    link?:string;
    title: string;
    description: string;
    img?: {
      alt: string;
      src: string;
    };
  },
  readMoreBtn?: boolean;
  padding?: string;
}

export const Card = ({data, readMoreBtn = false, padding = 'p-8'}:ICardProps) => {
  const {LOGO = '', title, description, img = null, link = "#"} = data;
 
  return (
    <div className={`flex flex-col w-[350px] self-start ${padding} rounded-3xl justify-center items-cen z-50 drop-shadow-sm`}>
        {LOGO !== '' && <div className='h-24 mb-8'>{ LOGO }</div>}
        {img !== null && <Image src={img.src} alt={img.alt} width={400} height={1} className="rounded-3xl mb-4" 
        style={{objectFit: 'cover'}}/>}
        <p className='font-bold text-2xl leading-[40px] mb-3'>{title}</p>
        <p className='font-light text-base leading-7 text-[#7D7987] mb-7 '> {description} </p>
        { readMoreBtn && 
          <Link href={link}> <button className='flex justify-start items-center w-[266px] font-base h-7 text-[#458FF6]  text-[17px] leading-[28px]  '> Read More <div className="ml-4 mt-1"><ArrowRight width={"14"} height={"9"} /></div> </button> </Link>
        }

    </div>
  )
}
