import "../../../resources/css/sections/sectionSkills.css";
import Title from "../../global/Title";
import SkillContent from "./SkillContent";
import HTML5 from "../../../resources/images/sections/SectionSkills/html-5.svg";
import CSS3 from "../../../resources/images/sections/SectionSkills/css3.svg"
import JavaScript from "../../../resources/images/sections/SectionSkills/javascript.svg"
import ReactJs from "../../../resources/images/sections/SectionSkills/reactjs.svg"
import NextJs from "../../../resources/images/sections/SectionSkills/nextjs.svg"
import NodeJs from "../../../resources/images/sections/SectionSkills/nodejs.svg"
import Redux from "../../../resources/images/sections/SectionSkills/redux.svg"
import Bootstrap from "../../../resources/images/sections/SectionSkills/bootstrap.svg"
import MySQL from "../../../resources/images/sections/SectionSkills/mysql.svg"
import Tailwind from "../../../resources/images/sections/SectionSkills/tailwind.svg"

const SectionSkills: React.FC = () => {
  return (
    <div className="section-skills d-flex justify-content-center container flex-column">
      <div>
        <Title text="Habilidades" className="text-center" />
      </div>
      <div className="skills-content">
        <div className="row mquery-align">
          <SkillContent skillTitle="HTML5" src={HTML5} alt="HTML-5" />
          <SkillContent skillTitle="CSS3" src={CSS3} alt="CSS3" />
          <SkillContent skillTitle="JavaScript" src={JavaScript} alt="JavaScript" />
          <SkillContent skillTitle="React.js" src={ReactJs} alt="ReactJS" />
          <SkillContent skillTitle="Next.js" src={NextJs} alt="NextJS" />
          <SkillContent skillTitle="Node.js" src={NodeJs} alt="NodeJS" />
          <SkillContent skillTitle="Redux" src={Redux} alt="Redux" />
          <SkillContent skillTitle="Bootstrap" src={Bootstrap} alt="Bootstrap" />
          <SkillContent skillTitle="MySQL" src={MySQL} alt="MySQL" />
          <SkillContent skillTitle="Tailwind" src={Tailwind} alt="Tailwind" />
        </div>
      </div>
    </div>
  );
};

export default SectionSkills;
