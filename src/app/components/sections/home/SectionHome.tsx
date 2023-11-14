import OnlyHeader from "../../header/OnlyHeader"
import '../../../resources/css/sections/sectionHome.css'
import { motion } from "framer-motion";
import Paragraph from "../../global/Paragraph";
import { useEffect } from "react";
import Typewriter from "react-ts-typewriter";
import Title from "../../global/Title";

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
                        opacity: [0, 1]
                    }}
                    transition={{ duration: 1.5 }}>
                        <Title text={<>
                            <span className="span-title">Construindo</span> sistemas e designs <span className="span-title">Codificando</span> sempre da maneira mais <span className="span-title">limpa</span> possível :]
                        </>}
                            className="initial-title-apresentation" />
                    </motion.div>
                    <Paragraph
                        text={<Typewriter text={'Olá, me chamo Gabriel Mendes,sou desenvolvedor especializado em Front-End, um prazer em conhece-lo.'} />}
                        className="initial-paragraph-apresentation" />
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        x: [0, 100],
                        opacity: 1
                    }}
                    transition={{ duration: 1.5, times: [0, 1] }}
                >
                </motion.div>
            </div>
        </>
    )
}

export default SectionHome