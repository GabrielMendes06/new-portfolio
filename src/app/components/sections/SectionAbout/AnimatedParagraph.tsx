import { motion } from "framer-motion"
import Paragraph from "../../global/Paragraph";

interface AnimatedParagraphProps {
    textProps: string,
    classNameProps: string,
}

const AnimatedParagraph: React.FC<AnimatedParagraphProps> = ({ textProps, classNameProps }) => {

    const item = {
        hidden: {
            opacity: 0,
            y: -50,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.3
            }
        }
    };

    return (
        <motion.div 
        variants={item}
        initial='hidden'
        whileInView='show'
        viewport={{once: true}}>
            <Paragraph
                text={textProps}
                className={classNameProps}
            />
        </motion.div>
    )
}

export default AnimatedParagraph