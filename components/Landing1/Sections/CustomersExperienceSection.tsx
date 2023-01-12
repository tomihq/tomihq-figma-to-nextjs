import Image from 'next/image'
import { ArrowBack, ArrowRight, Divider } from '../UI'
import { Dot } from './DotsSection'

export const CustomersExperience = () => {
  return (
    <section className="max-w-6xl mx-auto flex flex-col justify-start  flex-1 md:mb-56 mb-36  ">
        <div className='flex flex-col gap-2 lg:gap-12 bg-gradient-to-r from-[#5A98F2]  to-[#67C3F3] xl:h-[425px] py-24 justify-center md:justify-start md:rounded-xl '>
            <div className='flex flex-col gap-4 items-center px-8 md:px-12 xl:px-0'>
                <h3 className='text-white font-bold text-3xl md:text-4xl leading-[48px] '>What our customer are saying</h3>
                <Divider color={"white"} />
            </div>
            <div className='flex flex-col lg:flex-row px-12  justify-center lg:justify-evenly mt-2'>
                <div className='flex flex-row relative items-center gap-8 mb-4 md:mb-0'>
                    <Image 
                        alt={"customer experience person image"} 
                        src={"/img/Landing1/CustomerExperienceSection/person.webp"} 
                        width={120} height={120} 
                        className="border-4 border-white rounded-full"
                        />
                    <div className='flex flex-col'>
                        <p className='font-bold text-white text-[22px] leading-[29px] xl:leading-[48px]'>Edward Newgate</p>
                        <p className='font-normal text-lg leading-[48px] text-white opacity-85 xl:-mt-4 '>Founder Circle</p>
                    </div>
                </div>
                
        
                <div className='lg:w-[420px] lg:h-[120px]'>
                        <p className='text-white opacity-90 font-normal lg:text-[19px] leading-[30px] '>
                            “Our dedicated patient engagement app and 
                            web portal allow you to access information instantaneously (no tedeous form, long calls, 
                            or administrative hassle) and securely”
                        </p>
                </div>
            </div>
        </div>
        <div className='flex flex-row justify-center gap-8 mt-8 items-center'>
            <ArrowBack/>
            {
             Array(4).fill(Math.random()).map((data, i) => <Dot opacity={i==0?'1':'0.5'} fillColor={'#5B9BF3'} key={i} />)
            }
            <ArrowRight/>
            
        </div>
    </section>
  )
}
