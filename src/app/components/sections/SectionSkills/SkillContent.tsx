import Title from "../../global/Title"
import Image from "next/image"
import { motion } from "framer-motion"
import HTML5 from "../../../resources/images/sections/SectionSkills/html-5.svg";
import CSS3 from "../../../resources/images/sections/SectionSkills/css3.svg"
import JavaScript from "../../../resources/images/sections/SectionSkills/javascript.svg"
import ReactJs from "../../../resources/images/sections/SectionSkills/reactjs.svg"
import NextJs from "../../../resources/images/sections/SectionSkills/nextjs.svg"
import NodeJs from "../../../resources/images/sections/SectionSkills/nodejs.svg"
import Redux from "../../../resources/images/sections/SectionSkills/redux.svg"
import Bootstrap from "../../../resources/images/sections/SectionSkills/bootstrap.svg"
import MySQL from "../../../resources/images/sections/SectionSkills/mysql.svg"
import Tailwind from "../../../resources/images/sections/SectionSkills/tailwind.svg"

const skills = ["HTML5", "CSS3", "JavaScript", "ReactJs", "NextJs", "NodeJs", "Redux", "Bootstrap", "MySQL", "Tailwind"]
const skillImages: any = {
    HTML5: HTML5,
    CSS3: CSS3,
    JavaScript: JavaScript,
    ReactJs: ReactJs,
    NextJs: NextJs,
    NodeJs: NodeJs,
    Redux: Redux,
    Bootstrap: Bootstrap,
    MySQL: MySQL,
    Tailwind: Tailwind,
};

const FadeIn = {
    hidden: {
        opacity: 0,
        x: -100
    },
    visible: (index: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.18 * index,
            duration: 0.3
        }
    })
}

const SkillContent: React.FC = () => {
    return (
        <motion.ul
            className="row mquery-align">
            {skills.map((skill, index) => (
                <motion.li
                    initial='hidden'
                    key={index}
                    variants={FadeIn}
                    whileInView='visible'
                    className="bg-card bg-border-hover m-3 col-sm d-flex align-items-center justify-content-center flex-column skill-container "
                    custom={index}
                    viewport={{once: true}}>
                        <Title
                            className="skill-title span-title" text={skill} />
                    <Image
                        className="skill-image"
                        src={skillImages[skill]}
                        alt={skill} />
                        <span className="top"></span>
                        <span className="right"></span>
                        <span className="bottom"></span>
                        <span className="left"></span>
                </motion.li>
            ))}
            
        </motion.ul>
    )
}

export default SkillContent