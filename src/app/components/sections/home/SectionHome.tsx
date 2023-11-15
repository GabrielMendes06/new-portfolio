import "../../../resources/css/sections/sectionHome.css";
import { motion } from "framer-motion";
import OnlyHeader from "../../header/OnlyHeader";
import Paragraph from "../../global/Paragraph";
import Typewriter from "react-ts-typewriter";
import Title from "../../global/Title";
import DevBackground from "../../../resources/images/sections/sectionHome/programacao.png";
import Image from "next/image";

const SectionHome: React.FC = () => {
  return (
    <>
      <OnlyHeader />
      <div className="container bg-transparent initial-content d-flex align-items-center section-home">
        <div className="d-flex flex-column initial-text-apresentation">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: [-100, 0],
              opacity: [0, 1],
            }}
            transition={{ duration: 1.5 }}
          >
            <Title
              text={
                <>
                  A vida é uma constante oscilação entre a{" "}
                  <span className="span-title">ânsia</span> de{" "}
                  <span className="span-title">ter</span> e o{" "}
                  <span className="span-title">tédio</span> de{" "}
                  <span className="span-title">possuír</span>.
                </>
              }
              className="initial-title-apresentation"
            />
          </motion.div>
          <Paragraph
            text={
              <Typewriter
                text={
                  "Olá, me chamo Gabriel Mendes, sou desenvolvedor especializado em Front-End, um prazer em conhece-lo."
                }
              />
            }
            className="initial-paragraph-apresentation"
          />
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{
            x: [100, 0],
            opacity: [0 , 1]
          }}
          transition={{ duration: 2 }}
        >
          <motion.div
            initial={{  }}
            animate={{
              opacity: [1, 0, 1, 0, 1, 0]
              
            }}
            transition={{
              delay: 2,
              repeat: Infinity,
              duration: 2.5,
              times: [0, 0.01, 0.03, 0.4],
            }}
          >
            <Image src={DevBackground} alt="Imagem de fundo" />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionHome;
