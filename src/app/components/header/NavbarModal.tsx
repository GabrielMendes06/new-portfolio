import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NavbarItemList from './NavbarItemList';

function Example() {
    const [fullscreen, setFullscreen] = useState<any>(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint: any) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <>
            <Button className="me-2 mb-2 menu-burguer" onClick={() => handleShow(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
            </Button>
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)} className='bg-dark'>
                <Modal.Header className='bg-dark border-0' closeButton>
                    
                </Modal.Header>
                <Modal.Body className='bg-dark'>
                    <NavbarItemList text='Início' />
                    <NavbarItemList text='Sobre mim'/>
                    <NavbarItemList text='Conhecimentos'/>
                    <NavbarItemList text='Projetos'/>
                    <NavbarItemList text='Contato'/>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Example;