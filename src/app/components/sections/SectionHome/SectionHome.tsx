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
import DefaultButton from "../../global/DefaultButton";

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

    const buttonVariant = {
        hidden: {
            opacity: 0, x: -200
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 3.5
            }
        }
    }

    return (
        <>
            <OnlyHeader />
            <div className="container bg-transparent initial-content d-flex align-items-center section-home"
                id="home">
                <div className="d-flex flex-column initial-text-apresentation">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            y: [-100, 0],
                            opacity: [0, 1],
                        }}
                        transition={{ duration: 1.5 }}>
                        <Title
                            text=
                            {<>
                                <span className="span-title">Construindo</span> sistemas e designs, ajudando na formação de{" "}        
                                <span className="span-title">produtos digitais</span> de alta{" "}
                                <span className="span-title">qualidade</span> :)
                            </>}

                            className="initial-title-apresentation"
                        />
                    </motion.div>
                    <Paragraph
                        className="initial-paragraph-apresentation"
                        text={
                            <Typewriter
                                text={
                                    "Olá, meu nome é Gabriel Mendes, prazer em conhecê-lo."
                                }
                                speed={
                                    40
                                }
                            />
                        }
                    />
                    <motion.div className="mx-auto"
                        initial='hidden'
                        variants={buttonVariant}
                        animate='show'
                        whileHover={{
                            scale: 1.1,
                            transition: {
                                duration: 0.1
                            }
                        }}>
                        <DefaultButton text="Download CV" link="https://drive.google.com/file/d/1WGetBZnnsUGENoobDE6CMUw9W2Qrfyw3/view?usp=sharing" className="cv-button" />
                    </motion.div>
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
                            className="logo-background"
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
