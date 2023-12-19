import '../../../resources/css/sections/sectionAbout.css'
import Cartoon from '../../../resources/images/sections/sectionAbout/cartoon.webp'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Paragraph from '../../global/Paragraph'
import Title from '../../global/Title'

const SectionAbout: React.FC = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" })
    const viewVerification = isInView ? 'visible' : 'hidden'

    const FadeImage = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: [0, 1],
            y: [-40, 0],
            transition: {
                duration: 1,
                times: [0, 1]
            }
        }
    };

    const item = {
        hidden: {
            opacity: 0,
            y: -100
        },
        visible: (index: number) => ({
            opacity: [0, 1],
            y: [-40, 0],
            transition: {
                delay: 0.3 * index,
                duration: 1,
                times: [0, 1]
            }
        })
    }

    return (
        <div className="container bg-transparent section-content d-flex align-items-center justify-content-center section-about" 
        id='about'>
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
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default SectionAbout