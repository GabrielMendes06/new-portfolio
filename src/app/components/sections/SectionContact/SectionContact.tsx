import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Title from '../../global/Title'
import SmallIcon from '../SectionAbout/SmallIcon'
import '../../../resources/css/sections/sectionContact.css'

const SectionContact: React.FC = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { margin: '0px 0px 0px 0px', once: true })

    const FadeVariant = {
        hidden: {
            opacity: 0,
            x: -100
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1
            }
        }
    }

    return (
        <motion.div
            className="container bg-transparent initial-content d-flex flex-column justify-content-center section-contact mb-5"
            id="contact"
            initial='hidden'
            variants={FadeVariant}
            animate={isInView ? 'visible' : 'hidden'}>
            <motion.div
                ref={ref}
            >
                <Title text="Contato" className="text-center mb-5 section-title" />

                <ul className='row d-flex icon-container justify-content-center'>
                    <li className='col-sm-2'>
                        <SmallIcon
                            href='https://www.linkedin.com/in/gabrielmendes7/'
                            className='bi d-flex align-items-center justify-content-center bi-linkedin'
                        />
                        <h1 className='default-text contact-title text-center'>Linkedin</h1>
                    </li>
                    <li className='col-sm-2'>
                        <SmallIcon
                            href='https://github.com/GabrielMendes06'
                            className='bi d-flex align-items-center justify-content-center bi-github'
                        />
                        <h1 className='default-text contact-title text-center'>Github</h1>
                    </li>
                    <li className='col-sm-2'>
                        <SmallIcon
                            href='mailto:gabriel.mendes17@outlook.com'
                            className='bi d-flex align-items-center justify-content-center bi-envelope'
                        />
                        <h1 className='default-text contact-title text-center'>E-mail</h1>
                    </li>
                    <li className='col-sm-2'>
                        <SmallIcon
                            href='mailto:gabriel.mendes17@outlook.com'
                            className='bi d-flex align-items-center justify-content-center bi-telephone'
                        />
                        <h1 className='default-text contact-title text-center'>Telefone</h1>
                    </li>
                </ul>

            </motion.div>
        </motion.div>
    )
}

export default SectionContact