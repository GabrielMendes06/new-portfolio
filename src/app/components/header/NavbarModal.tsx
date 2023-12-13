import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalItemlist from "./ModalItemList";

function Example() {
  const [fullscreen, setFullscreen] = useState<string | true | undefined>(true);
  const [show, setShow] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const verification = scrolled ? 'text-light' : 'default-text'

  function checkThemeClass() {
    setIsDarkTheme(document.body.classList.contains('dark-theme'));
  }

  useEffect(() => {
    checkThemeClass()
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleShow(breakpoint: any) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      <Button
        className="
        menu-burguer 
        bg-transparent 
        border-0"
        onClick={() => {
          handleShow(true)
          checkThemeClass()
        }}
      >
        <i className={`bi bi-list ${verification}`}></i>
      </Button>
      <Modal
        show={show}
        fullscreen={fullscreen}
        onHide={() => setShow(false)}
        className="modal-bg-color"
      >
        <Modal.Header
          className="
          modal-bg-color 
          border-0"
          closeButton={true}
          closeVariant={isDarkTheme ? 'white' : ''}

        ></Modal.Header>
        <Modal.Body className="
        modal-bg-color 
        d-flex flex-column 
        list-none 
        align-items-center">
          <ModalItemlist text="Início" />
          <ModalItemlist text="Sobre mim" />
          <ModalItemlist text="Conhecimentos" />
          <ModalItemlist text="Projetos" />
          <ModalItemlist text="Contato" />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
