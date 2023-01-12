import { Card, Consultation, DetailsInfo, Divider, EmergencyCare, HealthBottle, LightningGlass, Tracking, WaterDrop } from '../UI'

interface IService {
  LOGO: any;
  title: string;
  description: string;
}

const SERVICES = [
  {LOGO: <LightningGlass/>, title:"Search doctor", description: "Choose your doctor from thousands of specialist, general, and trusted hospitals"},
  {LOGO: <HealthBottle/>, title: "Online pharmacy", description: "Buy your medicines with our mobile application with a simple delivery system"},
  {LOGO: <Consultation/>, title: "Consultation", description: "Free consultation with our trusted doctors and get the best recomendations"},
  {LOGO: <DetailsInfo/>, title: "Details info", description: "Free consultation with our trusted doctors and get the best recomendations"},
  {LOGO: <EmergencyCare/>, title: "Emergency care", description: "You can get 24/7 urgent care for yourself or your children and your lovely family"},
  {LOGO: <Tracking/>, title: "Tracking", description: "Track and save your medical history and health data "},
]

export const ServicesSection = () => {
  return (
    <section className='max-w-6xl mx-auto flex flex-col gap-3  items-center px-8 md:px-12 relative z-50 md:mb-56 mb-36'>
        <h3 className='font-bold text-3xl leading-[56px]'>Our services</h3>
        <Divider/>
        <h4 className='font-thin text-lg leading-8 text-center lg:w-[952px] lg:h-[60px] text-[#7D7987] mb-16 z-50'>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</h4>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-8 '>
          <WaterDrop/>
          {
            SERVICES.map((service:IService) => <Card key={service.title} data={service} />)
          }
        </div>

        <button className='flex justify-center items-center w-52 h-14 text-[#458FF6] font-bold text-lg leading-[60px] border-2 border-[#458FF6] rounded-full '> Learn more </button>
        
    </section>
  )
}
