import { motion } from "framer-motion"
import Backdrop from "./Backdrop"
import React, { MouseEventHandler, ReactNode } from "react"
import Image, { StaticImageData } from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface DinamicModalProps {
    modalOpen?: boolean;
    handleClose: MouseEventHandler;
    image: string | StaticImport;
    title: string;
    description?: string;
    data?: string;
    projectLink?: string;
    repositoryLink?: string;
}

const DinamicModal: React.FC<DinamicModalProps> = ({ 
    title, 
    description,
    image, 
    handleClose, 
    data,
    projectLink,
    repositoryLink  }) => {

    const dropIn = {
        hidden: {
            y: '-100vh',
            opacity: 1
        },
        visible: {
            y: "0",
            opacity: 1,
            transition: {
                duration: 0.1,
                type: "spring",
                damping: 100,
                stiffness: 500,
            }
        },
        exit: {
            y: '100vh'
        }

    }

    return (
        <Backdrop onClick={(handleClose)}>
            <motion.div
                className="card-modal-content"
                onClick={(e) => e.stopPropagation()}
                variants={dropIn}
                initial='hidden'
                animate='visible'
                exit='exit'> 
                <div className='row mquery-modal'>
                    <div className='col-md-6'> 
                        <Image src={image} alt={title} className="modal-image"/>
                    </div>
                    <div className='text-light col-md-6 d-flex flex-column'>
                        <div className='d-flex justify-content-between mb-4'>
                            <h1 className='card-modal-title'>{title}</h1>
                            <i onClick={(handleClose)} className="bi bi-x close-button-modal"></i>
                        </div>
                        <p className='description-modal'>{description}</p>
                        <p className='info-text info-modal-color mt-auto mb-0'>{data}</p>
                    </div>
                </div>
                <div className='mt-4'>
                    <a href={projectLink} className="text-light info-button modal-redirect-button">Acessar projeto</a>
                    <a href={repositoryLink} className="text-light info-button modal-redirect-button">Acessar repositório</a>
                </div>
            </motion.div>
        </Backdrop>
    )
}

export default DinamicModal