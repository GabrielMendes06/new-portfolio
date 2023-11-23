import '../../../resources/css/sections/sectionAbout.css'
import Cartoon from '../../../resources/images/sections/sectionAbout/cartoon.webp'
import Image from 'next/image'
import Paragraph from '../../global/Paragraph'
import Title from '../../global/Title'
import SmallIcon from '../../global/SmallIcon'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const SectionAbout: React.FC = () => {

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        console.log(inView)
        if (inView) {
            controls.start('show')
        }
    }, [controls, inView])

    const FadeIn = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                duration: 1
            }
        }
    };

    const item = {
        hidden: {
            opacity: 0,
            y: -50,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8
            }
        }
    };

    return (
        <div className="container bg-transparent section-content d-flex align-items-center justify-content-center section-about">
            <div className='bg-card card-content row d-flex p-4'>
                <motion.div className='col-sm-6 middle-card-div'
                    ref={ref}
                    animate={controls}
                    variants={FadeIn}
                    initial='hidden'
                >
                    <Image
                        src={Cartoon}
                        alt='Dev Cartoon'
                    />
                </motion.div>
                <div className='col-sm-6 d-flex flex-column align-items-start middle-card-div'>
                    <motion.div
                        ref={ref}
                        animate={controls}
                        variants={FadeIn}
                        initial='hidden'
                    >
                        <motion.div variants={item}>
                            <Title
                                text='Quem sou'
                                className='about-subtitle span-title mt-5'
                            />
                        </motion.div>
                        <motion.div variants={item}>
                            <Title
                                text='Gabriel Mendes'
                                className='about-title'
                            />
                        </motion.div>
                        <motion.div variants={item}>
                            <Title
                                text='Front-end Developer'
                                className='about-subtitle2'
                            />
                        </motion.div>
                        <motion.div variants={item}>
                            <Paragraph
                                text='Meu nome é Gabriel Mendes da Silva, sou Desenvolvedor Front-End desde 2021 e fascinado pela área em que trabalho. Tenho experiência com Startups, prototipagem rápida de idéias e designs de interfaces de alta qualidade, com animações e responsividade.'
                                className='text-content'
                            />
                        </motion.div>
                    </motion.div>
                    <motion.div className='d-flex icon-container'
                        ref={ref}
                        animate={controls}
                        variants={FadeIn}
                        initial='hidden'>
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