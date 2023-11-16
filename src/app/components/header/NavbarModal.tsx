import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import NavbarItemList from "./NavbarItemList";
import ModalItemlist from "./ModalItemList";

function Example() {
  const [fullscreen, setFullscreen] = useState<any>(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint: any) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      <Button
        className="menu-burguer bg-transparent border-0"
        onClick={() => handleShow(true)}
      >
        <i className="bi bi-list"></i>
      </Button>
      <Modal
        show={show}
        fullscreen={fullscreen}
        onHide={() => setShow(false)}
        className="modal-bg-color"
      >
        <Modal.Header
          className="modal-bg-color border-0 "
          closeButton={true}
          closeVariant="white"
        ></Modal.Header>
        <Modal.Body className="modal-bg-color d-flex flex-column list-none align-items-center">
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
