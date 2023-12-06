import { motion } from "framer-motion";

interface NavLinkProps {
    value: string
}

const NavLink: React.FC<NavLinkProps> = ( {value} ) => {
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };
    return <motion.li variants={item} className="item">{ value }</motion.li>
}

export default NavLink 
    