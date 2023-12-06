import React, { ReactNode } from 'react';

interface ModalProps {
    showModal: boolean;
    setShowModal: (show: boolean) => void;
    content: ReactNode;
}

const ProjectModal: React.FC<ModalProps> = ({ showModal, setShowModal, content }) => {
    return (
        <div style={{ display: showModal ? 'block' : 'none' }}>
            <div className='modal-project background-modal-project'>                             
                {content}
            </div>
        </div>
    );
};

export default ProjectModal
