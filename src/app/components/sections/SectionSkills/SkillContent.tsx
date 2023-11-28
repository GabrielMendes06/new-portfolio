import Title from "../../global/Title"
import Image, { StaticImageData } from "next/image"

interface SkillContentProps {
    skillTitle: string
    src: StaticImageData
    alt: string
}

const SkillContent: React.FC<SkillContentProps> = ({ skillTitle, src, alt }) => {
    return(
        <div className="skill-container m-3 col-sm d-flex flex-column align-items-center justify-content-center bg-card bg-border-hover">
            <Title 
            className="skill-title span-title" text={skillTitle}/>
            <Image 
            className="skill-image" 
            src={src} 
            alt={alt}/>
        </div>
    )
}

export default SkillContent