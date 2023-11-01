import OnlyHeader from "../../header/OnlyHeader"
import '../../../resources/css/sections/sectionHome.css'
import { motion } from "framer-motion";

const SectionHome: React.FC = () => {
    return (
        <>
            <OnlyHeader />
            <div className="container bg-transparent initial-content d-flex align-items-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        x: [0, 100],
                        opacity: 1
                    }}
                    transition={{ duration: 1.5, times: [0, 1] }}
                >
                </motion.div>
            </div>
        </>
    )
}

export default SectionHome