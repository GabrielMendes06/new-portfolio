import { motion } from "framer-motion"
import Title from "../../global/Title";

interface AnimatedTitleProps {
    textProps: string,
    classNameProps: string,
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ textProps, classNameProps }) => {

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
            <Title
                text={textProps}
                className={classNameProps}
            />
        </motion.div>
    )
}

export default AnimatedTitle