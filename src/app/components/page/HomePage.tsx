import "../../resources/css/sections/sectionHome.css"
import SectionAbout from "../sections/SectionAbout/SectionAbout"
import SectionSkills from "../sections/SectionSkills/SectionSkills"
import SectionHome from "../sections/SectionHome/SectionHome"
import SectionProjects from "../sections/SectionProjects/SectionProjects"
import SectionContact from "../sections/SectionContact/SectionContact"
import SectionExperience from "../sections/sectionExperience/SectionExperience"


export default function HomePage() {
    return (
       <div className="bg-content-style">
           <SectionHome />
           <SectionAbout />
           <SectionSkills />
           <SectionExperience />
           <SectionProjects />
           <SectionContact />
       </div>
    )
}  