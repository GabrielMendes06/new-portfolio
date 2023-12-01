import { motion } from 'framer-motion'
import Title from '../../global/Title'
import SolarSystem from '../../../resources/images/sections/sectionProjects/solar-system.png'
import EarthMuseum from '../../../resources/images/sections/sectionProjects/earth-museum.png'
import Login from '../../../resources/images/sections/sectionProjects/login.png'
import Portifolio from '../../../resources/images/sections/sectionProjects/portifolio-legado.png'
import ProjectCard from './ProjectCard'
import ReactJs from "../../../resources/images/sections/SectionSkills/reactjs.svg"
import '../../../resources/css/sections/sectionProject.css'
import Image from 'next/image'

const SectionProjects: React.FC = () => {

    const TitleVariant = {
        hidden: {
            opacity: 0,
            x: -200
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
        <div className="container bg-transparent d-flex flex-column justify-content-center section-projects pb-5">
            <div>
                <motion.div
                    variants={TitleVariant}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}>
                    <Title text="Projetos" className="text-center mb-5" />
                </motion.div>
            </div>
            <div className='row'>
                <ProjectCard
                    src={SolarSystem}
                    alt='SolarSystem'
                    title='Solar System'
                    tecnologys={
                        <div>
                            <Image
                                src={ReactJs}
                                alt='ReactJs'
                                width={35}
                            />
                        </div>
                    } />
                <ProjectCard
                    src={EarthMuseum}
                    alt='EarthMuseum'
                    title='Earth Museum'
                    tecnologys={
                        <i className={`bi bi-linkedin icon-size span-title`}></i>
                    } />
                <ProjectCard
                    src={Login}
                    alt='Login'
                    title='Login'
                    tecnologys={
                        <i className={`bi bi-linkedin icon-size span-title`}></i>
                    } />
                <ProjectCard
                    src={Portifolio}
                    alt='test'
                    title='Portifólio legado'
                    tecnologys={
                        <i className={`bi bi-linkedin icon-size span-title`}></i>
                    } />
            </div>
        </div>
    )
}

export default SectionProjects