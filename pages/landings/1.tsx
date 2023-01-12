import dynamic from 'next/dynamic';
import {  DotsSection, MainSection, Navbar } from '../../components/Landing1';

const ServicesSection = dynamic(() => import("../../components/Landing1/Sections/ServicesSection"));
const HealthCareSection = dynamic(() => import("../../components/Landing1/Sections/HealthCareSection"));
const MobileAppsSection = dynamic(() => import("../../components/Landing1/Sections/MobileAppsSection"));
const CustomersExperience = dynamic(() => import("../../components/Landing1/Sections/CustomersExperienceSection"));
const LastArticleSection = dynamic(() => import("../../components/Landing1/Sections/LastArticleSection"));
const FooterSection = dynamic(() => import("../../components/Landing1/Sections/FooterSection"));


export default function LandingOne() {
  //Use in all components max-w-6xl mx-auto
  return (
    <div>
      <Navbar />
      <DotsSection classes={" hidden md:relative"} />
      <MainSection/>
      <ServicesSection/>
      <HealthCareSection/>
      <MobileAppsSection/>
      <CustomersExperience/>
      <LastArticleSection/>
      <FooterSection/>

    </div>
  )
}

