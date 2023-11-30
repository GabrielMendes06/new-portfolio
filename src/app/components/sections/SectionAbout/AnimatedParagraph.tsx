import { motion } from "framer-motion"
import Paragraph from "../../global/Paragraph";

interface AnimatedParagraphProps {
    textProps: string,
    classNameProps: string,
}

const AnimatedParagraph: React.FC<AnimatedParagraphProps> = ({ textProps, classNameProps }) => {

    return (
            <Paragraph
                text={textProps}
                className={classNameProps}
            />
    )
}

export default AnimatedParagraph