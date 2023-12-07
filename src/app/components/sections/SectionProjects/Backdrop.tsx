import React, { MouseEventHandler, ReactNode } from 'react';
import { motion } from 'framer-motion'
interface ModalProps {
    onClick: MouseEventHandler; 
    children: ReactNode;
}

const Backdrop: React.FC<ModalProps> = ({ children, onClick }) => {
    return (
            <motion.div 
            onClick={onClick}
            className='modal-project background-modal-project'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}>                             
                {children}
            </motion.div>
    );
};

export default Backdrop
