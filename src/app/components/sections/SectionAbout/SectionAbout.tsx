import '../../../resources/css/sections/sectionAbout.css'
import Cartoon from '../../../resources/images/sections/sectionAbout/cartoon.webp'
import Image from 'next/image'
import Paragraph from '../../global/Paragraph'
import Title from '../../global/Title'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

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
        visible: (custom: number) => ({
            opacity: 1,
            y: [-40, 0],
            transition: {
                duration: 0.8,
                delay: custom * 0.3,
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
                        width={450}
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
                                text='Sobre mim'
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
                            <Paragraph text='Desenvolvedor especializado em Front-End. Atuo no mercado de tecnologia desde 2019, iniciando previamente como suporte técnico e iniciando no mercado de desenvolvimento em 2021, área que sigo me aprimorando até os dias de hoje. Trabalho com a construção de interfaces modernas e de alta qualidade, concentrado em animações, performance e responsividade.'
                                className='text-content' />
                        </motion.li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default SectionAbout