import "../../../resources/css/sections/sectionSkills.css";
import { motion } from "framer-motion";

//Importação das imagens dos ícones
import Title from "../../global/Title";
import SkillContent from "./SkillContent";


const SectionSkills: React.FC = () => {

  return (
    <motion.div
    >
      <div className="section-skills d-flex justify-content-center container flex-column">
        <div>
          <Title text="Habilidades" className="text-center" />
        </div>
        <div className="skills-content">
          <motion.div className="">
            <SkillContent />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SectionSkills;
