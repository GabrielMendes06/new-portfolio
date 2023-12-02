import "../../../resources/css/sections/sectionSkills.css";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

//Importação das imagens dos ícones
import Title from "../../global/Title";
import SkillContent from "./SkillContent";


const SectionSkills: React.FC = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" })
  const viewVerification = isInView ? 'visible' : 'hidden'

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
          ref={ref}
          variants={TitleVariant}
          initial='hidden'
          animate={viewVerification}
          viewport={{once: true}}>
          <Title text="Habilidades" className="text-center mb-5 section-title" />
        </motion.div>
        <div className="skills-content">
          <SkillContent />
        </div>
      </div>
    </motion.div>
  );
};

export default SectionSkills;
