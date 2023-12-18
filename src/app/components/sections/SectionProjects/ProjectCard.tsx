import { AnimatePresence, motion } from "framer-motion"
import Image, { StaticImageData } from "next/image"
import Title from "../../global/Title"
import { ReactNode, useEffect, useState } from "react"
import DinamicModal from "./DinamicModal";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface ProjectCardProps {
    src: StaticImageData;
    alt: string;
    title: string;
    tecnologys: ReactNode;
    image: string | StaticImport;
    modalTitle: string;
    description?: string;
    data?: string;
    projectLink: string;
    repositoryLink: string;
    className?: string;
    projectData: string;
    viewVerification: any;
    custom: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
    src, 
    alt,
    title, 
    tecnologys,
    modalTitle,
    description,
    image,
    data,
    projectLink,
    repositoryLink,
    projectData,
    className,
    viewVerification,
    custom }) => {

    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const close = () => setModalOpen(false)
    const open = () => setModalOpen(true)
    const [isNarrowScreen, setIsNarrowScreen] = useState(false);

    useEffect(() => {
        // Função para atualizar o estado baseado no tamanho da tela
        const handleResize = () => {
            setIsNarrowScreen(window.matchMedia("(max-width: 768px)").matches);
        };

        // Adiciona o ouvinte de eventos para resize
        window.addEventListener('resize', handleResize);

        // Chamada inicial para definir o estado corretamente no carregamento da página
        handleResize();

        // Remove o ouvinte de eventos quando o componente é desmontado
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const CardVariant = {
        normal: {
            scale: 1
        },
        hover: {
            scale: isNarrowScreen ? 1 : 1.2,
            transition: {
                duration: 0.3
            }
        }
    }

    const DescriptionVariant = {
        normal: {
            opacity: 1
        },
        hover: {
            opacity: 0
        }
    }

    const DateInfoVariant = {
        normal: {
            y: 0
        },
        hover: {
            y: 53,
            transition: {
                delay: 0.3,
                staggerChildren: 2
            }
        }
    }

    const ButtonVariant = {
        normal: {
            backgroundColor: "#2779e300",
            scale: 0.9
        },
        hover: {
            backgroundColor: "rgb(83, 160, 255)",
            scale: 1,
            transition: { duration: 1, delay: 0.8 }
        }
    }

    const item = {
        hidden: {
            opacity: 0,
            y: -300,
            x: 0
        },
        visible: (index: number) => ({
            opacity: [0, 1, 1],
            y: [-40, -10, 0],
            transition: {
                delay: 0.4 * index,
                duration: 1,
                times: [0, 0.7, 1]
            }
        })
    }

    return (
        <>
            <motion.div 
            className='col-lg-3 project-container'
            variants={item}
            initial='hidden'
            animate={viewVerification}
            custom={custom}
            >
                <motion.div
                    onClick={() => (modalOpen ? close() : open())}
                    variants={CardVariant}
                    initial='normal'
                    whileHover='hover'>
                    <Image
                        src={src}
                        alt={alt}
                        className="card-image" />
                    <motion.div
                        className="
                        card-description
                        d-flex flex-column"
                        variants={DescriptionVariant}>
                        <Title
                            text={title}
                            className="project-title" />
                        {tecnologys}
                    </motion.div>
                    <motion.div
                        className="
                        w-100
                        bg-dark
                        position-absolute
                        date-info "
                        variants={DateInfoVariant}
                    >
                        <div className="
                        d-flex
                        align-items-center
                        justify-content-between
                        info-container">
                            <p className="
                            text-light
                            m-0
                            info-text">{projectData}</p>
                            <motion.button
                                className="
                                text-light
                                info-button"
                                variants={ButtonVariant}
                            >Ver mais</motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>

            <AnimatePresence
                initial={false}
                mode="wait"
                onExitComplete={() => null}
            >
                {modalOpen && <DinamicModal modalOpen={modalOpen} handleClose={close}
                    title={modalTitle}
                    description={description}
                    data={data}
                    image={image}
                    projectLink={projectLink}
                    repositoryLink={repositoryLink}
                    className={className}
                />}
            </AnimatePresence>

        </>

    )
}

export default ProjectCard