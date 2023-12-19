import { Variants, motion } from "framer-motion"

interface SmallIconProps {
    className: string;
    href?: string;
}

const SmallIcon: React.FC<SmallIconProps> = ({ className }) => {  

    return (
        <div className="border-animation d-flex align-items-center justify-content-center">
            <div className="d-flex align-items-center justify-content-center icon-content icon-bg">
                <i className={`${className} icon-size`}></i>
            </div>
        </div>
    )
}

export default SmallIcon