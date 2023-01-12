import { CustomersExperience, DotsSection, FooterSection, HealthCareSection, LastArticleSection, MainSection, MobileAppsSection, Navbar, ServicesSection } from '../../components/Landing1';

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

