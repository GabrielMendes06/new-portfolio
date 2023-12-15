import "../../../resources/css/sections/sectionHome.css";
import { motion } from "framer-motion";
import OnlyHeader from "../../header/OnlyHeader";
import Paragraph from "../../global/Paragraph";
import Typewriter from "react-ts-typewriter";
import Title from "../../global/Title";
import DevBackground from "../../../resources/images/sections/sectionHome/m.svg";
import LogoDescription from "../../../resources/images/sections/sectionHome/logo-description.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

const SectionHome: React.FC = () => {

    const [isSmall, setIsSmall] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            const matchMedia = window.matchMedia("(max-width: 968px)");
            setIsSmall(matchMedia.matches);
        };

        checkScreenSize();

        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    // Definição dos variants baseado no estado isSmall
    const variants = isSmall ? {
        animate: {
            opacity: [0.5, 0, 0.2, 0, 0.5, 0.2]
        },
        transition: {
            delay: 2,
            repeat: Infinity,
            duration: 2.5,
            times: [0, 0.1, 0.25, 0.26, 1],
        }
    } : {
        animate: {
            opacity: [1, 0, 0.8, 0, 1, 0.2]
        },
        transition: {
            delay: 2,
            repeat: Infinity,
            duration: 2.5,
            times: [0, 0.1, 0.25, 0.26, 1],
        }
    };

    return (

        <>
            <OnlyHeader />
            <div className="
            container 
            bg-transparent 
            initial-content 
            d-flex align-items-center 
            section-home" 
            id="home">
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
                                    <span className="span-title">Construindo</span> sistemas e designs{" "}
                                    <span className="span-title">codificando</span> sempre da maneira mais{" "}
                                    <span className="span-title">limpa</span> possível :]
                                </>
                            }
                            className="initial-title-apresentation"
                        />
                    </motion.div>
                    <Paragraph
                        text={
                            <Typewriter
                                text={
                                    "Olá, meu nome é Gabriel Mendes, sou desenvolvedor especializado em Front-End, com cerca de 2 anos de experiência na indústria de desenvolvimento, prazer em conhece-lo."
                                }
                                speed={
                                    1.5
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
                        opacity: [0, 1]
                    }}
                    transition={{ duration: 2 }}
                    className="animation-heartcode"
                >
                    <motion.div
                        animate={variants.animate}
                        transition={variants.transition}
                    >
                        <Image src={DevBackground} 
                        alt="Imagem de fundo"
                        priority
                        />
                        <Image src={LogoDescription} 
                        alt="Imagem de fundo"
                        className="logo-description"
                        priority
                        />
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
};

export default SectionHome;
