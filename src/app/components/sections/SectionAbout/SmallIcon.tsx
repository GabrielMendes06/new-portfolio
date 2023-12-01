import { motion } from "framer-motion"

interface SmallIconProps {
    className: string,
    href: string
}

const SmallIcon: React.FC<SmallIconProps> = ({ className, href }) => {  
    const item = {
        hidden: {
            opacity: 0,
            x: -50,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                delay: 1.8
            }
        }
    };

    return (

        <motion.div variants={item} className="border-animation">
            <a href={`${href}`} className="d-flex align-items-center justify-content-center icon-content icon-bg ">
                <i className={`${className} icon-size`}></i>
            </a>
        </motion.div>
    )
}

export default SmallIcon