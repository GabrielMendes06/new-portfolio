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
                duration: 0.8
            }
        }
    };

    return (
        <motion.div variants={item}>
            <Title
                text={textProps}
                className={classNameProps}
            />
        </motion.div>
    )
}

export default AnimatedTitle