import { motion } from "framer-motion"
import Image, { StaticImageData } from "next/image"
import Title from "../../global/Title"
import { ReactNode } from "react"

interface ProjectCardProps {
    src: StaticImageData,
    alt: string
    title: string
    tecnologys: ReactNode
}

const ProjectCard: React.FC<ProjectCardProps> = ({ src, alt, title, tecnologys }) => {

    const CardVariant = {
        normal: {
            scale: 1
        },
        animate: {
            scale: 1.1
        }
    }

    return (
        <motion.div className='col-sm-4 m-3 project-container'
            variants={CardVariant}
            initial='normal'
            whileHover='animate'>
            <Image
                src={src}
                alt={alt} width='400' height='300'/>
            <div className="card-description d-flex flex-column">
                <Title 
                text={title} 
                className="project-title"/>
                {tecnologys}
            </div>
        </motion.div>

    )
}

export default ProjectCard