import "../../resources/css/sections/sectionHome.css"
import SectionAbout from "../sections/SectionAbout"
import SectionHome from "../sections/SectionHome"

export default function HomePage() {
    
    return (
       <div className="bg-content-style">
           <SectionHome />
           <SectionAbout />
       </div>
    )
}  