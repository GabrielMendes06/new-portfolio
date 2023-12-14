import { Variants, motion } from "framer-motion"

interface SmallIconProps {
    className: string;
    href?: string;
    variants?: Variants;
}

const SmallIcon: React.FC<SmallIconProps> = ({ className, href, variants }) => {  

    return (
        <motion.div variants={variants} className="
        border-animation 
        d-flex 
        align-items-center 
        justify-content-center">
            <div className="
            d-flex 
            align-items-center 
            justify-content-center 
            icon-content 
            icon-bg">
                <i className={`${className} icon-size`}></i>
            </div>
        </motion.div>
    )
}

export default SmallIcon