import { CompanyLogo } from "./assets"
import { OList } from "./OList"

const navbarItems = [{"text": "Home", "linkable": true, "selected": true}, {"text": "Find a doctor", "linkable": true}, {"text": "Apps", "linkable": true}, {"text": "Testimonials", "linkable": true}, {"text": "About us", "linkable": true}]

export const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row px-4 md:px-8 lg:px-0 gap-8 md:gap-0 justify-start items-start md:justify-between md:items-center max-w-6xl mx-auto py-8">
            <div className="flex gap-4 items-center justify-center">
                <CompanyLogo/>
                <span className="font-bold text-2xl inline-block text-[#233348] ">Trafalgar</span>
            </div>

            <div>
              <OList 
                 styles={"flex flex-row gap-8 flex-wrap md:justify-center"} 
                 data = {navbarItems}
              />
            </div>
            
    
    </nav>
  )
}
