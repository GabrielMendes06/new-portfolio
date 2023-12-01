import "../../../resources/css/sections/sectionSkills.css";
import { motion } from "framer-motion";

//Importação das imagens dos ícones
import Title from "../../global/Title";
import SkillContent from "./SkillContent";


const SectionSkills: React.FC = () => {

  const TitleVariant = {
    hidden: {
      opacity: 0,
      x: -200
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1
      }
    }
  }

  return (
    <motion.div
    >
      <div className="section-skills d-flex justify-content-center container flex-column">
        <motion.div
          variants={TitleVariant}
          initial='hidden'
          whileInView='visible'
          viewport={{once: true}}>
          <Title text="Habilidades" className="text-center mb-5" />
        </motion.div>
        <div className="skills-content">
          <SkillContent />
        </div>
      </div>
    </motion.div>
  );
};

export default SectionSkills;
