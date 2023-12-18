import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Title from '../../global/Title'
import SmallIcon from './SmallIcon'
import '../../../resources/css/sections/sectionContact.css'
import Paragraph from '../../global/Paragraph'
import M from '../../../resources/images/header/m.svg'
import Image from 'next/image'

const SectionContact: React.FC = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { margin: '0px 0px 0px 0px', once: true })

    //Propriedades de animação
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

    const hoverElement = {
        normal: { scale: 0.9 },
        hover: { scale: 1.1 }
    }

    return (
        <>
            <motion.div
                className="
                container 
                bg-transparent 
                initial-content 
                d-flex flex-column 
                justify-content-center 
                section-contact 
                pb-5
                "
                id="contact"
                initial='hidden'
                variants={FadeVariant}
                animate={isInView ? 'visible' : 'hidden'}>
                <motion.div
                    ref={ref}
                >
                    <Title text="Contato"
                        className="
                text-center 
                pb-5 
                section-title"
                    />
                    <ul className='
                row d-flex 
                icon-container 
                justify-content-center'
                    >
                        <motion.li
                            variants={hoverElement}
                            initial='normal'
                            whileHover='hover'
                            className='col-sm-3 contact-icon-container'
                            onClick={() => window.open('mailto:gabriel.mendes17@outlook.com')}>
                            <SmallIcon
                                className='
                                bi 
                                bi-envelope
                                d-flex 
                                align-items-center 
                                justify-content-center'
                            />
                            <h1 className='
                            default-text 
                            contact-title 
                            text-center
                            '>E-mail</h1>
                            <p className='
                        text-center 
                        subtitle-contact
                        text-content'>gabriel.mendes17@outlook.com</p>
                        </motion.li>
                        <motion.li
                            variants={hoverElement}
                            initial='normal'
                            whileHover='hover'
                            className='col-sm-3 contact-icon-container'
                            onClick={() => window.open('https://www.linkedin.com/in/gabrielmendes7/')}>
                            <SmallIcon
                                className='
                            bi 
                            d-flex 
                            align-items-center 
                            justify-content-center 
                            bi-linkedin'
                            />
                            <h1 className='
                        default-text 
                        contact-title 
                        text-center'
                            >Linkedin</h1>
                            <p className='
                        text-center 
                        subtitle-contact
                        text-content'>@gabrielmendes7</p>
                        </motion.li>
                        <motion.li
                            variants={hoverElement}
                            initial='normal'
                            whileHover='hover'
                            className='col-sm-3 contact-icon-container'
                            onClick={() => window.open('https://github.com/gabrielmendesdev')}>
                            <SmallIcon
                                className='
                            align-items-center 
                            bi 
                            bi-github
                            d-flex                          
                            justify-content-center'
                            />
                            <h1 className='default-text contact-title text-center'>Github</h1>
                            <p className='
                        text-center 
                        subtitle-contact
                        text-content'>@gabrielmendesdev</p>
                        </motion.li>
                        <motion.li
                            variants={hoverElement}
                            initial='normal'
                            whileHover='hover'
                            className='col-sm-3 contact-icon-container'
                            onClick={() => window.open('https://wa.me/5511977829550/?text=Olá, Gabriel! Vim através do seu portifólio.')}>
                            <SmallIcon
                                className='
                            bi 
                            bi-telephone
                            d-flex 
                            align-items-center 
                            justify-content-center'
                            />
                            <h1 className='
                        contact-title 
                        default-text 
                        text-center'
                            >Telefone</h1>
                            <p className='
                        text-center 
                        subtitle-contact
                        text-content'>(11)97782-9550</p>
                        </motion.li>
                    </ul>
                </motion.div>
            </motion.div>
            <div className='d-flex justify-content-between footer'>
                <Paragraph text='Copyright &copy; 2024. Todos os direitos reservados' 
                className='m-0 text-light text-footer'/>
                <div className='d-flex'>
                    <Paragraph 
                    text='Powered by: ' 
                    className='m-0 text-light text-footer'/>
                    <Image src={M}
                    alt='logo'
                    width={36}
                    className='me-3'/>
                </div>
            </div>
        </>
    )
}

export default SectionContact