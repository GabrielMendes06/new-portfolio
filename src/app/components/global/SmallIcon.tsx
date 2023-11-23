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
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8
            }
        }
    };

    return (

        <motion.div variants={item}>
            <a href={`${href}`} className="d-flex align-items-center justify-content-center icon-content">
                <i className={`${className} icon-size`}></i>
            </a>
        </motion.div>
    )
}

export default SmallIcon