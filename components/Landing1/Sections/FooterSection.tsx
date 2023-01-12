import React from 'react'
import { CompanyLogo, OList, VerticalMenu } from '../UI'
import { DotsSection } from './DotsSection'




const COMPANY = [{text: 'About', linkable: true}, {text: 'Testimonials', linkable: true}, {text: 'Find a doctor', linkable: true}, {text: 'Canada', linkable: true} ]

const REGION = [{text: 'Indonesia', linkable: true}, {text: 'Singapore', linkable: true}, {text: 'Hongkong', linkable: true}, {text: 'Canada', linkable: true} ]

const HELP = [{text: 'Help center', linkable: true}, {text: 'Contact support', linkable: true}, {text: 'Instructions', linkable: true}, {text: 'How it works', linkable: true} ]

export const FooterSection = () => {
  return (
    <footer className='flex items-center justify-start flex-1 xl:max-w-[1920px] mx-auto xl:h-[432px] xl:max-h-[500px] bg-gradient-to-r from-[#5A98F2]  to-[#67C3F3] w-full xl:mt-48 py-12 xl:py-0 bottom-0 shadow-xl'>
        <DotsSection classes={"hidden xl:flex self-start  top-56 left-2"} />
        <div className='flex flex-col lg:flex-row px-12 relative gap-24 justify-between'>
           <section className='flex flex-col  gap-8 items-start'>
                <div className='flex gap-4 items-center justify-center'> 
                    <CompanyLogo fontColor={"#5B9BF3"} circleColor={"#FFFFFF"} />
                    <span className="font-bold text-2xl inline-block text-white ">Trafalgar</span>
                </div>
                <div className='lg:h-20  lg:w-96'>
                    <p className='font-light text-lg text-white'>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                </div>
                <div className='lg:h-20  lg:w-96'>
                    <p className='font-light text-lg text-white'>©Trafalgar PTY LTD 2020. All rights reserved</p>
                </div>
           </section>

           <VerticalMenu category={"Company"} data={COMPANY} />
           <VerticalMenu category={"Region"} data={REGION} />
           <VerticalMenu category={"Help"} data={HELP} />
        </div>
    </footer>
  )
}
