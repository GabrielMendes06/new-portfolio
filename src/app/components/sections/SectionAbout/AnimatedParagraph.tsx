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
                duration: 0.8
            }
        }
    };

    return (
        <motion.div variants={item}>
            <Paragraph
                text={textProps}
                className={classNameProps}
            />
        </motion.div>
    )
}

export default AnimatedParagraph