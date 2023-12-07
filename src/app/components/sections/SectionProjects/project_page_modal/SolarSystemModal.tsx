import Image, { StaticImageData } from 'next/image'
import { MouseEventHandler } from 'react';

interface SolarSystemModal {
    handleClose: MouseEventHandler;
    image: StaticImageData;
    title: string;
    description: string;
    data: string;
    projectLink: string;
    repositoryLink: string;
}

const SolarSystemModal: React.FC<SolarSystemModal> = ({ 
    handleClose, 
    image, 
    title, 
    description, 
    data,
    projectLink,
    repositoryLink 
}) => {
    return (
    <>
        <div className='row'> 
            <div className='col-md-6'>
                <Image src={image} alt='SolarSystem' />
            </div>
            <div className='text-light col-md-6'>
                <div className='d-flex justify-content-between'>
                    <h1 className='card-modal-title'>{title}</h1>
                    <i onClick={handleClose} className="bi bi-x close-button-modal"></i>
                </div>
                <p className='description-modal'>{description}</p>
                <p className='info-text info-modal-color'> {data}</p>
            </div>
        </div>
        <div className='mt-4'>
            <a href={projectLink} className="text-light info-button modal-redirect-button">Acessar projeto</a>
            <a href={repositoryLink} className="text-light info-button modal-redirect-button">Acessar repositório</a>
        </div>
    </>


    )
}

export default SolarSystemModal