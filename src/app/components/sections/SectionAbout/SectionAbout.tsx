import '../../../resources/css/sections/sectionAbout.css'
import Cartoon from '../../../resources/images/sections/sectionAbout/cartoon.webp'
import Image from 'next/image'
import SmallIcon from './SmallIcon'
import { motion } from 'framer-motion'
import AnimatedTitle from './AnimatedTitle'
import AnimatedParagraph from './AnimatedParagraph'

const SectionAbout: React.FC = () => {

    const FadeIn = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4,
                duration: 1,
                delay: 0.4
            }
        }
    };

    const FadeImage = {
        hidden: { opacity: 0, x: -50 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                staggerChildren: 0.4,
                duration: 1,
                delay: 0.4
            }
        }
    };

    return (
        <div className="container bg-transparent section-content d-flex align-items-center justify-content-center section-about">
            <div className='bg-card row d-flex p-4'>
                <motion.div className='col-sm-6 middle-card-div'
                    variants={FadeImage}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true }}
                >
                    <Image
                        src={Cartoon}
                        alt='Dev Cartoon'
                    />
                </motion.div>
                <div className='col-sm-6 d-flex flex-column justify-content-center align-items-start middle-card-div'>
                    <motion.div
                        variants={FadeIn}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true }}
                    >
                        <AnimatedTitle
                            textProps='Quem sou'
                            classNameProps='about-subtitle span-title mt-5'
                        />
                        <AnimatedTitle
                            textProps='Gabriel Mendes'
                            classNameProps='about-title'
                        />
                        <AnimatedTitle
                            textProps='Front-end Developer'
                            classNameProps='about-subtitle2'
                        />
                        <AnimatedParagraph
                            textProps='Meu nome é Gabriel Mendes da Silva, sou Desenvolvedor Front-End desde 2021 e fascinado pela área em que trabalho. Tenho experiência com Startups, prototipagem rápida de idéias e designs de interfaces de alta qualidade, com animações e responsividade.'
                            classNameProps='text-content'
                        />
                    </motion.div>
                    <motion.div className='d-flex icon-container '
                        variants={FadeIn}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true }}>
                        <SmallIcon
                            href='#'
                            className='bi bi-linkedin'
                        />
                        <SmallIcon
                            href='#'
                            className='bi bi-github'
                        />
                        <SmallIcon
                            href='#'
                            className='bi bi-envelope'
                        />
                        <SmallIcon
                            href='#'
                            className='bi bi-instagram'
                        />
                    </motion.div>
                </div>

            </div>
        </div>
    )
}

export default SectionAbout