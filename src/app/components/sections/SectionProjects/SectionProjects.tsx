import { motion, useInView } from 'framer-motion'
import Title from '../../global/Title'
import SolarSystem from '../../../resources/images/sections/sectionProjects/solar-system.png'
import EarthMuseum from '../../../resources/images/sections/sectionProjects/earth-museum.png'
import Login from '../../../resources/images/sections/sectionProjects/login.png'
import Portifolio from '../../../resources/images/sections/sectionProjects/portifolio-legado.png'
import ProjectCard from './ProjectCard'
import TypeScript from "../../../resources/images/sections/SectionSkills/typescript.svg"
import ReactJs from "../../../resources/images/sections/SectionSkills/reactjs.svg"
import Bootstrap from "../../../resources/images/sections/SectionSkills/bootstrap.svg"
import JavaScript from "../../../resources/images/sections/SectionSkills/javascript.svg"
import HTML5 from "../../../resources/images/sections/SectionSkills/html-5.svg"
import CSS3 from "../../../resources/images/sections/SectionSkills/css3.svg"
import NodeJs from "../../../resources/images/sections/SectionSkills/nodejs.svg"
import MySQL from "../../../resources/images/sections/SectionSkills/mysql.svg"

import '../../../resources/css/sections/sectionProject.css'
import Image from 'next/image'
import { useRef } from 'react'

const SectionProjects: React.FC = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, {margin: '0px 0px -250px 0px', once: true})

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
        initial='hidden'
        variants={FadeVariant} 
        className="container bg-transparent d-flex flex-column justify-content-center section-projects pb-5"
        animate={isInView ? 'visible' : 'hidden'}>
            <div>
                <motion.div
                    ref={ref}  
                    initial='hidden'
                    >
                    <Title text="Projetos" className="text-center mb-5 section-title" />
                </motion.div>
            </div>
            <div className='row responsive-align-row mt-5'>
                <ProjectCard
                    src={SolarSystem}
                    alt='SolarSystem'
                    title='Solar System'
                    tecnologys={
                        <div className='w-100 d-flex justify-content-center mx-2'>
                            <Image
                                src={HTML5}
                                alt='HTML5'
                                width={30}
                                className='mx-1'
                            />
                            <Image
                                src={CSS3}
                                alt='CSS3'
                                width={30}
                                className='mx-1'
                            />
                            <Image
                                src={ReactJs}
                                alt='ReactJs'
                                width={30}
                                className='mx-1'
                            />
                            <Image
                                src={Bootstrap}
                                alt='Bootstrap'
                                width={30}
                                className='mx-1'
                            />
                            <Image
                                src={TypeScript}
                                alt='TypeScript'
                                width={30}
                                className='mx-1'
                            />
                            
                        </div>
                    } />
                <ProjectCard
                    src={EarthMuseum}
                    alt='EarthMuseum'
                    title='Earth Museum'
                    tecnologys={
                        <div className='w-100 d-flex justify-content-center mx-2'>
                            <Image
                                src={HTML5}
                                alt='HTML5'
                                width={30}
                                className='mx-1'
                            />
                            <Image
                                src={CSS3}
                                alt='CSS3'
                                width={30}
                                className='mx-1'
                            />
                            <Image
                                src={Bootstrap}
                                alt='Bootstrap'
                                width={30}
                                className='mx-1'
                            />   
                            <Image
                                src={JavaScript}
                                alt='JavaScript'
                                width={30}
                                className='mx-1'
                            />           
                        </div>
                    } />
                <ProjectCard
                    src={Login}
                    alt='Login'
                    title='Login'
                    tecnologys={
                        <div className='w-100 d-flex justify-content-center mx-2'>
                            <Image
                                src={HTML5}
                                alt='HTML5'
                                width={30}
                                className='mx-1'
                            />
                            <Image
                                src={CSS3}
                                alt='CSS3'
                                width={30}
                                className='mx-1'
                            />
                            <Image
                                src={JavaScript}
                                alt='JavaScript'
                                width={30}
                                className='mx-1'
                            />  
                            <Image
                                src={NodeJs}
                                alt='NodeJs'
                                width={30}
                                className='mx-1'
                            />   
                            <Image
                                src={MySQL}
                                alt='MySQL'
                                width={30}
                                className='mx-1'
                            />             
                        </div>
                    } />
                <ProjectCard
                    src={Portifolio}
                    alt='test'
                    title='Portifólio legado'
                    tecnologys={
                        <div className='w-100 d-flex justify-content-center mx-2'>
                            <Image
                                src={HTML5}
                                alt='HTML5'
                                width={30}
                                className='mx-1'
                            />
                            <Image
                                src={CSS3}
                                alt='CSS3'
                                width={30}
                                className='mx-1'
                            />
                            <Image
                                src={ReactJs}
                                alt='ReactJs'
                                width={30}
                                className='mx-1'
                            />
                            <Image
                                src={Bootstrap}
                                alt='Bootstrap'
                                width={30}
                                className='mx-1'
                            />          
                        </div>
                    } />
            </div>
        </motion.div>
    )
}

export default SectionProjects