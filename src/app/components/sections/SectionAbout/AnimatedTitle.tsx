import { motion } from "framer-motion"
import Title from "../../global/Title";

interface AnimatedTitleProps {
    textProps: string,
    classNameProps: string,
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ textProps, classNameProps }) => {
    return (
        <motion.div 
            viewport={{once: true}}>
            <Title
                text={textProps}
                className={classNameProps}
            />
        </motion.div>
    )
}

export default AnimatedTitle