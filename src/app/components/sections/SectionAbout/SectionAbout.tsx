import '../../../resources/css/sections/sectionAbout.css'
import Cartoon from '../../../resources/images/sections/sectionAbout/cartoon.webp'
import Image from 'next/image'
import SmallIcon from './SmallIcon'
import { motion, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Paragraph from '../../global/Paragraph'
import Title from '../../global/Title'

const SectionAbout: React.FC = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" })
    const viewVerification = isInView ? 'visible' : 'hidden'

    const FadeIn = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
            }
        }
    };

    const FadeImage = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
            }
        }
    };

    const item = {
        hidden: {
            opacity: 0,
            x: -100
        },
        visible: (index: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.3 * index,
                duration: 1
            }
        })
    }

    const itemIcon = {
        hidden: {
            opacity: 0,
            x: -50,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                delay: 1.8
            }
        }
    };

    return (
        <div className="container bg-transparent section-content d-flex align-items-center justify-content-center section-about" id='about'>
            <div className='bg-card row d-flex'>
                <motion.div className='col-md-6 middle-card-div'
                    variants={FadeImage}
                    initial='hidden'
                    animate={viewVerification}
                >
                    <Image
                        src={Cartoon}
                        alt='Dev Cartoon'
                        priority
                    />
                </motion.div>
                <div className='col-md-6 d-flex flex-column justify-content-center align-items-start middle-card-div'>
                    <ul>
                        <motion.li
                            initial='hidden'
                            key={1}
                            variants={item}
                            animate={viewVerification}
                            custom={1}
                            ref={ref}>
                            <Title
                                text='Quem sou'
                                className='about-subtitle span-title mt-5'
                            />
                        </motion.li>
                        <motion.li
                            initial='hidden'
                            key={2}
                            variants={item}
                            animate={viewVerification}
                            custom={2}>
                            <Title
                                text='Gabriel Mendes'
                                className='about-title'
                            />
                        </motion.li>
                        <motion.li
                            initial='hidden'
                            key={3}
                            variants={item}
                            animate={viewVerification}
                            custom={3}>
                            <Title
                                text='Front-end Developer'
                                className='about-subtitle2'
                            />
                        </motion.li>
                        <motion.li
                            initial='hidden'
                            key={4}
                            variants={item}
                            animate={viewVerification}
                            custom={4}>
                            <Paragraph text='Meu nome é Gabriel Mendes da Silva, sou Desenvolvedor Front-End desde 2021 e fascinado pela área em que trabalho. Tenho experiência com Startups, prototipagem rápida de idéias e designs de interfaces de alta qualidade, com animações e responsividade.'
                                className='text-content' />
                        </motion.li>
                        <motion.li
                            className='d-flex icon-container'
                            initial='hidden'
                            key={5}
                            variants={FadeIn}
                            animate={viewVerification}
                            custom={5}>
                            <SmallIcon
                                href='https://www.linkedin.com/in/gabrielmendes7/'
                                className='bi bi-linkedin'  
                                variants={itemIcon}
                            />
                            <SmallIcon
                                href='https://github.com/GabrielMendes06'
                                className='bi bi-github'
                                variants={itemIcon}
                            />
                            <SmallIcon
                                href='mailto:gabriel.mendes17@outlook.com'
                                className='bi bi-envelope'
                                variants={itemIcon}
                            />
                        </motion.li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default SectionAbout