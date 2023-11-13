import OnlyHeader from "../../header/OnlyHeader"
import '../../../resources/css/sections/sectionHome.css'
import { motion } from "framer-motion";
import Paragraph from "../../global/Paragraph";
import { useEffect } from "react";
import Typewriter from "react-ts-typewriter";

const SectionHome: React.FC = () => {








    return (
        <>
            <OnlyHeader />
            <div className="container bg-transparent initial-content d-flex align-items-center section-home">
                <Paragraph 
                text={<Typewriter text='Olá, me chamo Gabriel Mendes, sou desenvolvedor especializado em Front-End, um prazer em conhece-lo.' />}
                className="initial-text-apresentation"/>
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